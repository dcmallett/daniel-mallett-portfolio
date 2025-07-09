# Adding Projects Database to Your Portfolio

## What I've Set Up for You:

### 1. ✅ **Updated Types**

- Added `Project` interface in `types/notion.ts` with fields for name, description, tech stack, status, URLs, images, and dates

### 2. ✅ **Updated Notion Configuration**

- Added `PROJECTS` database ID support in `lib/notion.ts`

### 3. ✅ **Created Projects API**

- New API endpoint at `/api/projects/route.ts` that fetches projects from Notion
- Handles multiple field naming conventions for flexibility

### 4. ✅ **Updated Projects Page**

- New dynamic projects page that fetches from your Notion database
- Filters by status (All, Completed, In Progress)
- Displays project images, tech stack, and links

## Next Steps to Complete Setup:

### Step 1: Create Projects Database in Notion

1. **Create a new table** in Notion called "Projects"
2. **Add these columns** (Files & media type for images):

```
| Name | Description | Tech Stack | Status | Live URL | GitHub URL | Image | Start Date | End Date |
|------|-------------|------------|--------|----------|------------|-------|------------|----------|
| Title| Rich Text   | Multi-select| Select | URL      | URL        | Files | Date       | Date     |
```

**Column Details:**

- **Name** (Title) - Project name
- **Description** (Rich Text) - Project description
- **Tech Stack** (Multi-select) - Add options like "React", "Next.js", "Node.js", etc.
- **Status** (Select) - Add options: "Completed", "In Progress", "Planned"
- **Live URL** (URL) - Link to live project
- **GitHub URL** (URL) - Link to repository
- **Image** (Files & media) - Project screenshot
- **Start Date** (Date) - Project start date
- **End Date** (Date) - Project completion date

### Step 2: Add Environment Variable

Add this to your `.env.local` file:

```
NOTION_PROJECTS_DB_ID=your_projects_database_id_here
```

### Step 3: Get Database ID

1. Open your projects database in Notion
2. Copy the share link
3. Extract the database ID (the long string in the URL)
4. Add it to your `.env.local` file

### Step 4: Add Sample Projects

Add a few projects to test:

1. Fill in the project details
2. Upload images for visual appeal
3. Set status and add tech stack tags

### Step 5: Test the Setup

1. Restart your dev server: `npm run dev`
2. Visit `/projects` to see your Notion-powered projects page
3. Projects will be filtered by status and display beautifully

## Features Included:

✅ **Dynamic filtering** by project status  
✅ **Image support** with fallbacks  
✅ **Tech stack display** with styled tags  
✅ **GitHub and live demo links**  
✅ **Responsive design** with animations  
✅ **Loading and error states**  
✅ **Empty state handling**

## Alternative Field Names Supported:

The API supports multiple naming conventions:

- **Tech Stack**: "Tech Stack", "TechStack", "Technologies"
- **URLs**: "Live URL", "LiveURL", "GitHub URL", "GitHubURL", "Repository"
- **Images**: "Image", "Screenshot", "Cover"
- **Dates**: "Start Date", "StartDate", "End Date", "EndDate"

Your projects page will automatically pull data from Notion and display it beautifully! 🚀
