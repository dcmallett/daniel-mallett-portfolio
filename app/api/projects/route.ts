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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractImageUrl(files: any): string {
	if (Array.isArray(files) && files.length > 0) {
		const file = files[0];
		if (file.type === "external") {
			return file.external?.url || "";
		} else if (file.type === "file") {
			return file.file?.url || "";
		}
	}
	return "";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractUrl(url: any): string {
	return url?.url || "";
}

export async function GET() {
	try {
		// Check if Notion is properly configured
		if (!isNotionConfigured() || !DATABASES.PROJECTS) {
			return NextResponse.json(
				{ error: "Notion Projects API not configured" },
				{ status: 500 }
			);
		}

		// Query the database
		const response = await notion.databases.query({
			database_id: DATABASES.PROJECTS,
			sorts: [
				{
					property: "Start Date",
					direction: "descending",
				},
			],
		});

		// Transform the data to a more usable format
		const projects = response.results
			.map((page: unknown) => {
				// Assert the type of page to access its properties
				const typedPage = page as {
					id: string;
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					properties: any;
					created_time?: string;
				};
				if (!typedPage.properties) return null;

				const properties = typedPage.properties;

				return {
					id: typedPage.id,
					name:
						extractTextFromTitle(properties.Name?.title) ||
						extractTextFromTitle(properties.Title?.title) ||
						"Untitled Project",
					description:
						extractTextFromRichText(properties.Description?.rich_text) || "",
					techStack:
						properties["Tech Stack"]?.multi_select?.map(
							(tech: { name: string }) => tech.name
						) ||
						properties.TechStack?.multi_select?.map(
							(tech: { name: string }) => tech.name
						) ||
						properties.Technologies?.multi_select?.map(
							(tech: { name: string }) => tech.name
						) ||
						[],
					status: properties.Status?.select?.name || "In Progress",
					liveUrl:
						extractUrl(properties["Live URL"]) ||
						extractUrl(properties.LiveURL) ||
						"",
					githubUrl:
						extractUrl(properties["GitHub URL"]) ||
						extractUrl(properties.GitHubURL) ||
						extractUrl(properties.Repository) ||
						"",
					image:
						extractImageUrl(properties.Image?.files) ||
						extractImageUrl(properties.Screenshot?.files) ||
						extractImageUrl(properties.Cover?.files) ||
						"",
					startDate:
						properties["Start Date"]?.date?.start ||
						properties.StartDate?.date?.start ||
						"",
					endDate:
						properties["End Date"]?.date?.start ||
						properties.EndDate?.date?.start ||
						"",
				};
			})
			.filter(Boolean);

		return NextResponse.json({ projects }, { status: 200 });
	} catch (error) {
		console.error("Error fetching projects from Notion:", error);
		return NextResponse.json(
			{ error: "Failed to fetch projects" },
			{ status: 500 }
		);
	}
}
