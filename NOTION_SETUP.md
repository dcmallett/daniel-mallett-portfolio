# Notion API Setup Guide

This guide will help you set up the Notion API integration for your portfolio blog.

## Prerequisites

1. A Notion account
2. A Notion database for your blog posts

## Step 1: Create a Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Give it a name (e.g., "Portfolio Blog")
4. Select your workspace
5. Click "Submit"
6. Copy the **Internal Integration Token** (starts with `secret_`)

## Step 2: Create a Blog Database

1. In Notion, create a new page
2. Add a database with the following properties:
   - **Title** (Title type) - The blog post title
   - **Summary** (Text type) - A brief description
   - **Published** (Date type) - Publication date
   - **Tags** (Multi-select type) - Post categories/tags
   - **Slug** (Text type) - URL-friendly version of title
   - **Status** (Select type) - Options: "Draft", "Published"

## Step 3: Share Database with Integration

1. Go to your blog database page
2. Click "Share" in the top right
3. Click "Invite" and select your integration
4. Give it "Edit" permissions

## Step 4: Get Database ID

1. In your database page, copy the URL
2. The database ID is the string between the last `/` and the `?`
   - Example: `https://notion.so/yourworkspace/DATABASE_ID?v=...`
   - Copy the `DATABASE_ID` part

## Step 5: Update Environment Variables

Update your `.env.local` file:

```env
NOTION_API_KEY=secret_your_integration_token_here
NOTION_DATABASE_ID=your_database_id_here
```

## Step 6: Test the Integration

1. Add some test blog posts to your Notion database
2. Set their status to "Published"
3. Run your development server: `npm run dev`
4. Visit `/blogs` to see your posts

## Database Schema Example

| Title          | Summary                             | Published  | Tags                | Slug           | Status    |
| -------------- | ----------------------------------- | ---------- | ------------------- | -------------- | --------- |
| My First Post  | This is my first blog post          | 2024-01-01 | [Web Dev, Tutorial] | my-first-post  | Published |
| Learning React | Tips for learning React effectively | 2024-01-15 | [React, Learning]   | learning-react | Published |

## Troubleshooting

- **No posts showing**: Check that posts have "Status" set to "Published"
- **API errors**: Verify your integration token and database ID
- **Permission errors**: Ensure the integration has access to your database
- **Property errors**: Check that your database has all required properties with correct names

## File Structure

```
lib/
  notion.ts          # Notion client configuration
app/
  api/
    blog/
      route.ts       # API route for fetching posts
types/
  notion.ts          # TypeScript definitions
components/
  BlogList.tsx       # Blog listing component
```
