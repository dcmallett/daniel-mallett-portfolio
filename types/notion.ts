export interface BlogPost {
	id: string;
	title: string;
	summary: string;
	publishedDate: string;
	tags: string[];
	slug: string;
	status: string;
	image?: string;
	profileImage?: string;
}

export interface Project {
	id: string;
	name: string;
	description: string;
	techStack: string[];
	status: string;
	liveUrl?: string;
	githubUrl?: string;
	image?: string;
	startDate?: string;
	endDate?: string;
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
