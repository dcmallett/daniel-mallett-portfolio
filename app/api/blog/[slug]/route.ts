/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { notion, isNotionConfigured } from "@/lib/notion";

// Types for our blog post
interface BlogPost {
	id: string;
	title: string;
	content: string;
	date: string;
	readTime: string;
	tags: string[];
	slug: string;
	summary?: string;
	publishedDate?: string;
	status?: string;
}

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ slug: string }> }
) {
	try {
		const { slug } = await params;

		if (!isNotionConfigured()) {
			// Return hardcoded post if Notion not configured
			const hardcodedPosts: Record<string, BlogPost> = {
				"nextjs-portfolio": {
					id: "nextjs-portfolio",
					title: "Why I Built My Portfolio with Next.js",
					content:
						"Building a modern developer portfolio requires careful consideration...",
					date: "December 15, 2024",
					readTime: "5 min read",
					tags: ["Next.js", "React", "Tailwind CSS", "Portfolio"],
					slug: "nextjs-portfolio",
				},
				"keep-learning": {
					id: "keep-learning",
					title: "How to Keep Learning as a Developer",
					content: "The tech industry evolves at breakneck speed...",
					date: "December 10, 2024",
					readTime: "7 min read",
					tags: ["Learning", "Career", "Development", "Growth"],
					slug: "keep-learning",
				},
				"frontend-vs-backend": {
					id: "frontend-vs-backend",
					title: "Backend vs Frontend: My Journey",
					content:
						"I often get asked whether I prefer frontend or backend development...",
					date: "December 5, 2024",
					readTime: "6 min read",
					tags: ["Full Stack", "Backend", "Frontend", "Career"],
					slug: "frontend-vs-backend",
				},
			};

			const post = hardcodedPosts[slug];
			if (!post) {
				return NextResponse.json({ error: "Post not found" }, { status: 404 });
			}

			return NextResponse.json({ post }, { status: 200 });
		}

		// Query Notion database for the specific post by slug
		const response = await notion.databases.query({
			database_id: process.env.NOTION_DATABASE_ID!,
			filter: {
				property: "Slug",
				rich_text: {
					equals: slug,
				},
			},
		});

		if (response.results.length === 0) {
			return NextResponse.json({ error: "Post not found" }, { status: 404 });
		}

		const page = response.results[0] as any;

		// Get the page content
		const blocks = await notion.blocks.children.list({
			block_id: page.id,
		});

		// Extract properties
		const properties = page.properties;
		const title = properties.Name?.title?.[0]?.plain_text || "Untitled";
		const summary = properties.Summary?.rich_text?.[0]?.plain_text || "";
		const publishedDate =
			properties.Published?.date?.start || page.created_time;
		const tags =
			properties.Tag?.multi_select?.map((tag: any) => tag.name) || [];
		const status = properties.Status?.status?.name || "Draft";

		// Convert blocks to content (simplified - you might want to enhance this)
		const content = blocks.results
			.map((block: any) => {
				if (block.type === "paragraph") {
					return (
						block.paragraph?.rich_text
							.map((text: any) => text.plain_text)
							.join("") || ""
					);
				}
				if (block.type === "heading_1") {
					return `# ${
						block.heading_1?.rich_text
							.map((text: any) => text.plain_text)
							.join("") || ""
					}`;
				}
				if (block.type === "heading_2") {
					return `## ${
						block.heading_2?.rich_text
							.map((text: any) => text.plain_text)
							.join("") || ""
					}`;
				}
				if (block.type === "heading_3") {
					return `### ${
						block.heading_3?.rich_text
							.map((text: any) => text.plain_text)
							.join("") || ""
					}`;
				}
				return "";
			})
			.filter(Boolean)
			.join("\n\n");

		const post = {
			id: page.id,
			title,
			summary,
			content,
			publishedDate,
			tags,
			slug,
			status,
			date: new Date(publishedDate).toLocaleDateString(),
			readTime: `${Math.ceil(content.length / 1000)} min read`, // Rough estimate
		};

		return NextResponse.json({ post }, { status: 200 });
	} catch (error) {
		console.error("Error fetching post:", error);
		return NextResponse.json(
			{ error: "Failed to fetch post" },
			{ status: 500 }
		);
	}
}
