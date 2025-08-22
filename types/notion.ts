export interface BlogPost {
	id: string;
	title: string;
	summary: string;
	publishedDate: string;
	tags: string[];
	slug: string;
	status: string;
}

export interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	category: "Frontend" | "Backend" | "Fullstack";
	github?: string;
	demo?: string;
	featured: boolean;
	status: string;
	image?: string;
	createdAt: string;
}

export interface NotionConfig {
	apiKey: string;
	databaseId: string;
}

export interface NotionError {
	error: string;
	code?: string;
	message?: string;
}

// Notion API response types
export interface NotionPage {
	id: string;
	created_time: string;
	properties: {
		[key: string]: NotionProperty;
	};
}

export interface NotionProperty {
	id: string;
	type: string;
	title?: NotionRichText[];
	rich_text?: NotionRichText[];
	multi_select?: NotionMultiSelect[];
	select?: NotionSelect;
	checkbox?: boolean;
	url?: string;
	files?: NotionFile[];
}

export interface NotionRichText {
	type: string;
	text: {
		content: string;
		link?: string | null;
	};
	plain_text: string;
}

export interface NotionMultiSelect {
	id: string;
	name: string;
	color: string;
}

export interface NotionSelect {
	id: string;
	name: string;
	color: string;
}

export interface NotionFile {
	name: string;
	type: string;
	file?: {
		url: string;
		expiry_time: string;
	};
}
