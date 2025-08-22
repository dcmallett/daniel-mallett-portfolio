import { NextResponse } from "next/server";
import { notion, DATABASES } from "@/lib/notion";
import type { Project } from "@/types/notion";

export async function GET() {
	try {
		// Check if Notion is properly configured
		if (!process.env.NOTION_API_KEY || !process.env.NOTION_PROJECTS_DB_ID) {
			return NextResponse.json(
				{ error: "Notion API not configured for projects" },
				{ status: 500 }
			);
		}

		const response = await notion.databases.query({
			database_id: DATABASES.PROJECTS,
			filter: {
				property: "Status",
				select: {
					equals: "Published",
				},
			},
			sorts: [
				{
					property: "Featured",
					direction: "descending",
				},
			],
		});

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const projects: Project[] = response.results.map((page: any) => {
			const properties = page.properties;

			return {
				id: page.id,
				title: properties.Name?.title?.[0]?.plain_text || "Untitled Project",
				description: properties.Description?.rich_text?.[0]?.plain_text || "",
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				technologies:
					properties.Technologies?.multi_select?.map(
						(tech: { name: string }) => tech.name
					) || [],
				category:
					(properties.Category?.select?.name as
						| "Frontend"
						| "Backend"
						| "Fullstack") || "Fullstack",
				github: properties.GitHub?.url || "",
				demo: properties.demoURL?.url || "",
				featured: properties.Featured?.checkbox || false,
				status: properties.Status?.select?.name || "Draft",
				image: properties.Image?.files?.[0]?.file?.url || "",
				createdAt: page.created_time,
			};
		});

		return NextResponse.json(projects);
	} catch (error) {
		console.error("Error fetching projects from Notion:", error);
		return NextResponse.json(
			{ error: "Failed to fetch projects" },
			{ status: 500 }
		);
	}
}
