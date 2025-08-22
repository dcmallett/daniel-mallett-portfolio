// Simple test script to verify Notion connection
const { Client } = require("@notionhq/client");
require("dotenv").config({ path: ".env.local" });

const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

async function testConnection() {
	try {
		console.log("Testing Notion connection...");
		console.log("API Key:", process.env.NOTION_API_KEY ? "✓ Set" : "✗ Missing");
		console.log(
			"Projects DB ID:",
			process.env.NOTION_PROJECTS_DB_ID ? "✓ Set" : "✗ Missing"
		);

		const response = await notion.databases.query({
			database_id: process.env.NOTION_PROJECTS_DB_ID,
		});

		console.log("✓ Connection successful!");
		console.log("Projects found:", response.results.length);
		console.log(
			"Projects:",
			response.results.map((p) => ({
				title: p.properties.Name?.title?.[0]?.plain_text,
				status: p.properties.Status?.select?.name,
			}))
		);
	} catch (error) {
		console.error("✗ Connection failed:");
		console.error("Error code:", error.code);
		console.error("Error message:", error.message);

		if (error.code === "object_not_found") {
			console.error("❌ Database not found - check your NOTION_PROJECTS_DB_ID");
		} else if (error.code === "unauthorized") {
			console.error(
				"❌ Unauthorized - check your integration has access to the database"
			);
		}
	}
}

testConnection();
