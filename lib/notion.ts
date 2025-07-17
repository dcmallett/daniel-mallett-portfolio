import { Client } from "@notionhq/client";

// Initialize the Notion client
export const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

// Database IDs (you can add more as needed)
export const DATABASES = {
	BLOG_POSTS: process.env.NOTION_DATABASE_ID || "",
	PROJECTS: process.env.NOTION_PROJECTS_DB_ID || "",
	// Add more database IDs as needed
	// EXPERIENCE: process.env.NOTION_EXPERIENCE_DB_ID || '',
};

// Helper function to check if Notion is properly configured
export const isNotionConfigured = () => {
	return !!(process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID);
};
