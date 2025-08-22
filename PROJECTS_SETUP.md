# Notion Projects Setup Guide

This guide will help you set up the Notion Projects database integration for your portfolio.

## Prerequisites

1. A Notion account
2. A Notion integration token (should already be in your `.env.local`)
3. A Projects database in Notion

## Step 1: Verify Your Notion Integration

Your integration should already be set up based on your `.env.local` file:

- ✅ `NOTION_API_KEY` is configured
- ✅ `NOTION_PROJECTS_DB_ID` is configured

## Step 2: Create Your Projects Database Structure

Your Notion Projects database should have the following properties (column names must match exactly):

### Required Properties:

- **Name** (Title type) - The project title
- **Description** (Text type) - Project description
- **Status** (Select type) - Options: "Draft", "Published"
- **Category** (Select type) - Options: "Frontend", "Backend", "Fullstack"
- **Technologies** (Multi-select type) - Tech stack used
- **Featured** (Checkbox type) - Whether to highlight this project
- **GitHub** (URL type) - GitHub repository link
- **URL** (URL type) - Live demo/website link

### Optional Properties:

- **Image** (Files & media type) - Project screenshot/thumbnail
- **Created** (Created time type) - Auto-populated creation date

## Step 3: Configure Property Options

### Status Options:

- Draft
- Published

### Category Options:

- Frontend
- Backend
- Fullstack

### Technologies (Example multi-select options):

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js
- Express
- PostgreSQL
- MongoDB
- Prisma
- Python
- Django
- Flask
- Vue.js
- Angular
- PHP
- Laravel

## Step 4: Share Database with Integration

1. Go to your Projects database page in Notion
2. Click "Share" in the top right corner
3. Click "Invite" and select your integration
4. Give it "Edit" permissions

## Step 5: Add Sample Projects

Create a few test projects with the following data:

| Name              | Description                   | Status    | Category | Technologies                   | Featured | GitHub                 | URL         |
| ----------------- | ----------------------------- | --------- | -------- | ------------------------------ | -------- | ---------------------- | ----------- |
| Portfolio Website | My personal portfolio website | Published | Frontend | [Next.js, React, Tailwind CSS] | ✓        | https://github.com/... | https://... |
| REST API          | A scalable REST API service   | Published | Backend  | [Node.js, Express, PostgreSQL] | ✗        | https://github.com/... |             |

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Visit `http://localhost:3000/api/projects` to test the API
3. Visit `http://localhost:3000/projects` to see your projects page

## Expected API Response Format

```json
[
	{
		"id": "notion-page-id",
		"title": "Portfolio Website",
		"description": "My personal portfolio website",
		"technologies": ["Next.js", "React", "Tailwind CSS"],
		"category": "Frontend",
		"github": "https://github.com/...",
		"demo": "https://...",
		"featured": true,
		"status": "Published",
		"image": "",
		"createdAt": "2024-01-01T00:00:00.000Z"
	}
]
```

## Current Status

- ✅ Environment variables configured
- ✅ API route created (`/api/projects`)
- ✅ TypeScript types defined
- ❌ Projects page still uses hardcoded data (needs update)

## Next Steps

To complete the integration:

1. Update your projects page to fetch from the API instead of using hardcoded data
2. Add loading states and error handling
3. Test with real Notion data

## Troubleshooting

### Common Issues:

**No projects showing:**

- Check that projects have "Status" set to "Published"
- Verify your `NOTION_PROJECTS_DB_ID` in `.env.local`

**API errors:**

- Verify your integration token is correct
- Check that the integration has access to your database
- Ensure all required properties exist in your Notion database

**Property errors:**

- Property names in Notion must match exactly (case-sensitive)
- Check that multi-select and select options are set up correctly

**Permission errors:**

- Make sure your integration has been shared with the database
- Integration needs "Edit" permissions

### Testing API Directly:

Visit: `http://localhost:3000/api/projects`

Expected status codes:

- `200`: Success with projects array
- `500`: Configuration or database error
