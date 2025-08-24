// Simple test script to verify Notion connection for blog
import { Client } from "@notionhq/client";

// You'll need to replace these with your actual values
const NOTION_API_KEY = "ntn_b969618419585rELKgV4sih2ioctapO6RSs0V1H9DMj1gB";
const NOTION_DATABASE_ID = "22b241f0078380daa758fc7165ffa5cb";

const notion = new Client({
	auth: NOTION_API_KEY,
});

async function testBlogConnection() {
	try {
		console.log("Testing Notion blog connection...");
		console.log("API Key:", NOTION_API_KEY ? "✓ Set" : "✗ Missing");
		console.log("Blog DB ID:", NOTION_DATABASE_ID ? "✓ Set" : "✗ Missing");

		// First, let's try to retrieve the database to see its structure
		console.log("\n--- Testing database retrieval ---");
		const database = await notion.databases.retrieve({
			database_id: NOTION_DATABASE_ID,
		});

		console.log("✓ Database found!");
		console.log(
			"Database title:",
			database.title?.[0]?.plain_text || "No title"
		);
		console.log("Properties:", Object.keys(database.properties));

		// Let's check the Status property type specifically
		console.log("Status property type:", database.properties.Status?.type);
		console.log(
			"Status options:",
			database.properties.Status?.status?.options?.map((opt) => opt.name)
		);

		// Now let's try to query it
		console.log("\n--- Testing database query (all posts) ---");
		const allResponse = await notion.databases.query({
			database_id: NOTION_DATABASE_ID,
			sorts: [
				{
					property: "Published",
					direction: "descending",
				},
			],
		});

		console.log("✓ All posts query successful!");
		console.log("Total posts found:", allResponse.results.length);

		if (allResponse.results.length > 0) {
			console.log("\nAll posts with their statuses:");
			allResponse.results.forEach((post, index) => {
				const properties = post.properties;
				console.log(
					`${index + 1}. Name: ${
						properties.Name?.title?.[0]?.plain_text || "No name"
					}`
				);
				console.log(
					`   Status: ${properties.Status?.status?.name || "No status"}`
				);
			});
		}

		// Now let's try to query only published posts
		console.log("\n--- Testing database query (published posts only) ---");
		const response = await notion.databases.query({
			database_id: NOTION_DATABASE_ID,
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

		console.log("✓ Query successful!");
		console.log("Posts found:", response.results.length);

		if (response.results.length > 0) {
			console.log("Sample post properties:");
			const firstPost = response.results[0];
			console.log("Post properties:", Object.keys(firstPost.properties));

			// Try to extract data like the API does
			const properties = firstPost.properties;
			console.log(
				"Name:",
				properties.Name?.title?.[0]?.plain_text || "No name"
			);
			console.log(
				"Summary:",
				properties.Summary?.rich_text?.[0]?.plain_text || "No summary"
			);
			console.log("Status:", properties.Status?.status?.name || "No status");
			console.log(
				"Tags:",
				properties.Tag?.multi_select?.map((tag) => tag.name) || "No tags"
			);
		}
	} catch (error) {
		console.error("✗ Connection failed:");
		console.error("Error code:", error.code);
		console.error("Error message:", error.message);

		if (error.code === "object_not_found") {
			console.error("❌ Database not found - check your NOTION_DATABASE_ID");
			console.error(
				"Make sure the database ID is correct and the integration has access"
			);
		} else if (error.code === "unauthorized") {
			console.error(
				"❌ Unauthorized - check your integration has access to the database"
			);
			console.error(
				"Make sure you've shared the database with your integration"
			);
		} else if (error.code === "invalid_request") {
			console.error(
				"❌ Invalid request - there might be an issue with the property names"
			);
		}
	}
}

testBlogConnection();
