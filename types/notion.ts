export interface BlogPost {
	id: string;
	title: string;
	summary: string;
	publishedDate: string;
	tags: string[];
	slug: string;
	status: string;
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
