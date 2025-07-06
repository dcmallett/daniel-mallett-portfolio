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
					property: "Created",
					direction: "descending",
				},
			],
			filter: {
				property: "Status",
				select: {
					equals: "Published",
				},
			},
		});

		// Transform the data to a more usable format
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const posts = response.results
			.map((page: any) => {
				if (!page.properties) return null;

				const properties = page.properties;

				return {
					id: page.id,
					title: extractTextFromTitle(properties.Title?.title) || "Untitled",
					summary: extractTextFromRichText(properties.Summary?.rich_text) || "",
					publishedDate:
						properties.Published?.date?.start ||
						page.created_time ||
						new Date().toISOString(),
					tags:
						properties.Tags?.multi_select?.map(
							(tag: { name: string }) => tag.name
						) || [],
					slug: extractTextFromRichText(properties.Slug?.rich_text) || page.id,
					status: properties.Status?.select?.name || "Draft",
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
