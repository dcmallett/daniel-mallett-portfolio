import { NextResponse } from "next/server";
import { notion, DATABASES, isNotionConfigured } from "@/lib/notion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractTextFromRichText(richText: any): string {
	if (Array.isArray(richText) && richText.length > 0) {
		return richText[0]?.plain_text || "";
	}
	return "";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractTextFromTitle(title: any): string {
	if (Array.isArray(title) && title.length > 0) {
		return title[0]?.plain_text || "";
	}
	return "";
}

// Type for Notion properties
interface NotionProperties {
	Name?: {
		title?: Array<{ plain_text: string }>;
	};
	Summary?: {
		rich_text?: Array<{ plain_text: string }>;
	};
	Published?: {
		date?: { start: string };
	};
	Tag?: {
		multi_select?: Array<{ name: string }>;
	};
	Slug?: {
		rich_text?: Array<{ plain_text: string }>;
	};
	Status?: {
		status?: { name: string };
	};
}

export async function GET() {
	try {
		// Check if Notion is properly configured
		if (!isNotionConfigured()) {
			return NextResponse.json(
				{ error: "Notion API not configured" },
				{ status: 500 }
			);
		}

		// Query the database
		const response = await notion.databases.query({
			database_id: DATABASES.BLOG_POSTS,
			sorts: [
				{
					property: "Published",
					direction: "descending",
				},
			],
			filter: {
				property: "Status",
				status: {
					equals: "Published",
				},
			},
		});

		// Transform the data to a more usable format
		const posts = response.results
			.map((page: unknown) => {
				// Assert the type of page to access its properties
				const typedPage = page as {
					id: string;
					properties: NotionProperties;
					created_time?: string;
				};
				if (!typedPage.properties) return null;

				const properties = typedPage.properties;

				return {
					id: typedPage.id,
					title: extractTextFromTitle(properties.Name?.title) || "Untitled",
					summary: extractTextFromRichText(properties.Summary?.rich_text) || "",
					publishedDate:
						properties.Published?.date?.start ||
						typedPage.created_time ||
						new Date().toISOString(),
					tags:
						properties.Tag?.multi_select?.map(
							(tag: { name: string }) => tag.name
						) || [],
					slug:
						extractTextFromRichText(properties.Slug?.rich_text) || typedPage.id,
					status: properties.Status?.status?.name || "Draft",
				};
			})
			.filter(Boolean);

		return NextResponse.json({ posts }, { status: 200 });
	} catch (error) {
		console.error("Error fetching posts from Notion:", error);
		return NextResponse.json(
			{ error: "Failed to fetch posts" },
			{ status: 500 }
		);
	}
}
