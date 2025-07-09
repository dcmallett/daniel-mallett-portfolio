# Adding Images to Your Notion Blog

## Overview
Your blog now supports both banner images and profile images from your Notion database. Here's how to set them up:

## Required Notion Database Fields

### 1. Banner/Featured Image
The system will automatically look for banner images in these fields (in order of priority):
- **Image** (Files & media field)
- **Cover** (Files & media field)

### 2. Profile Image (NEW!)
The system will automatically look for profile images in these fields (in order of priority):
- **ProfileImage** (Files & media field)
- **Profile Image** (Files & media field) 
- **AuthorImage** (Files & media field)
- **Author Image** (Files & media field)

## How to Add Images in Notion

### Step 1: Create the Fields
1. Open your Notion blog database
2. Add a new property by clicking the "+" next to your existing columns
3. Choose "Files & media" as the property type
4. Name it one of the supported names above (e.g., "Image" for banner, "Profile Image" for author)

### Step 2: Add Images to Posts
1. **For Banner Images:**
   - Click in the Image/Cover field for a blog post
   - Upload an image file or paste an image URL
   - The image will appear as the featured image above your blog content

2. **For Profile Images:**
   - Click in the Profile Image field for a blog post
   - Upload your author photo or paste an image URL
   - The image will appear as your profile photo in the author section

### Step 3: Image Requirements
- **Supported formats:** JPG, PNG, WebP, GIF
- **Banner images:** Recommended 1200x600px or larger for best quality
- **Profile images:** Recommended 200x200px or larger (will be displayed as 40x40px circle)
- **Sources:** You can upload files directly or use URLs from Unsplash, your own hosting, etc.

## Image Sources Supported

### External URLs (Already Configured)
- Unsplash images
- Notion file hosting
- Any HTTPS image URL

### Upload Options
- Direct file uploads to Notion
- Drag and drop images
- Copy/paste images

## Example Notion Database Structure

```
| Title | Summary | Image | Profile Image | Tags | Published |
|-------|---------|-------|---------------|------|-----------|
| My First Post | A great post... | [banner.jpg] | [profile.jpg] | [Tech, Web] | 2024-01-01 |
```

## Testing Your Setup

1. Add images to a blog post in Notion
2. Visit your blog page to see the banner image
3. Visit the individual post to see both banner and profile images
4. If images don't appear, check:
   - Field names match the supported options above
   - Images are properly uploaded/linked
   - Image URLs are accessible

## Tips

- **Banner images** work best with landscape orientation (16:9 or 2:1 ratio)
- **Profile images** work best as square images (1:1 ratio)
- Use high-quality images for professional appearance
- Consider using consistent profile images across all posts for branding
- You can use different profile images per post if you have guest authors

## Fallbacks

- If no banner image is provided, a placeholder will be shown
- If no profile image is provided, initials "DM" will be displayed in a blue circle
- All images are optimized automatically by Next.js for performance
