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
			// Return fallback data instead of error
			return NextResponse.json(
				{
					posts: [
						{
							id: "nextjs-portfolio",
							title: "Why I Built My Portfolio with Next.js",
							summary:
								"A deep dive into building a fast, modern developer portfolio with Next.js and Tailwind CSS.",
							publishedDate: new Date().toISOString(),
							tags: ["Next.js", "Portfolio"],
							slug: "nextjs-portfolio",
							status: "Published",
						},
						{
							id: "keep-learning",
							title: "How to Keep Learning as a Developer",
							summary:
								"Tips and strategies for continuous improvement and staying current in tech.",
							publishedDate: new Date().toISOString(),
							tags: ["Learning", "Career"],
							slug: "keep-learning",
							status: "Published",
						},
						{
							id: "frontend-vs-backend",
							title: "Backend vs Frontend: My Journey",
							summary:
								"My experience working across the full stack and what I've learned from both sides.",
							publishedDate: new Date().toISOString(),
							tags: ["Full Stack", "Career"],
							slug: "frontend-vs-backend",
							status: "Published",
						},
					],
				},
				{ status: 200 }
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
