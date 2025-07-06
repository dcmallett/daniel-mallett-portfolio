"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = {
	"nextjs-portfolio": {
		title: "Why I Built My Portfolio with Next.js",
		date: "December 15, 2024",
		readTime: "5 min read",
		tags: ["Next.js", "React", "Tailwind CSS", "Portfolio"],
		content: `
			Building a modern developer portfolio requires careful consideration of both aesthetics and functionality. When I decided to rebuild my portfolio from scratch, I knew I wanted something that would showcase not just my projects, but also my technical skills and attention to detail.

			## Why Next.js?

			Next.js has become my go-to framework for React applications, and here's why it was perfect for my portfolio:

			**Server-Side Rendering (SSR)**: My portfolio loads incredibly fast thanks to Next.js's built-in SSR capabilities. This means better SEO and faster initial page loads.

			**File-based Routing**: The intuitive routing system made organizing my portfolio sections effortless. Each page and dynamic route just works out of the box.

			**Image Optimization**: The built-in Image component automatically optimizes images for different screen sizes and formats, ensuring my portfolio looks great everywhere.

			## The Design Philosophy

			I wanted my portfolio to be clean, modern, and focused on content. Tailwind CSS was the perfect choice because:

			- **Utility-first approach**: Rapid prototyping and consistent spacing
			- **Responsive design**: Mobile-first design that scales beautifully
			- **Custom theming**: Easy to maintain a consistent color scheme

			## Performance Considerations

			Performance was a top priority. I implemented several optimizations:

			- **Lazy loading** for images and components
			- **Code splitting** to reduce bundle sizes
			- **Optimized fonts** using Next.js font optimization
			- **Static generation** where possible for lightning-fast loads

			The result is a portfolio that scores 100/100 on Google PageSpeed Insights and provides an excellent user experience across all devices.
		`,
	},
	"keep-learning": {
		title: "How to Keep Learning as a Developer",
		date: "December 10, 2024",
		readTime: "7 min read",
		tags: ["Learning", "Career", "Development", "Growth"],
		content: `
			The tech industry evolves at breakneck speed. New frameworks, languages, and best practices emerge constantly. As developers, our ability to learn continuously isn't just beneficial—it's essential for survival and growth in this field.

			## The Learning Mindset

			First and foremost, cultivate curiosity. Every bug is a learning opportunity. Every new project is a chance to try something different. I've found that the most successful developers I know share one trait: they're genuinely excited about learning new things.

			## Structured Learning Approaches

			### 1. Project-Based Learning
			Don't just read about new technologies—build with them. When I wanted to learn TypeScript, I didn't just read the docs. I rebuilt one of my existing projects using TypeScript, which taught me the practical benefits and challenges.

			### 2. Community Engagement
			Join developer communities, attend meetups, and participate in online discussions. Some of my best learning experiences have come from:
			- **Discord servers** for specific technologies
			- **Local meetups** and conferences
			- **Open source contributions**
			- **Tech Twitter** discussions

			### 3. Teaching Others
			Write blog posts, create tutorials, or mentor junior developers. Teaching forces you to truly understand concepts and often reveals gaps in your knowledge.

			## Staying Current

			I follow a few strategies to stay updated:

			**Weekly Learning Time**: I dedicate 2-3 hours every week specifically to learning something new or deepening existing knowledge.

			**Curated Content**: I follow key influencers and subscribe to newsletters like JavaScript Weekly and React Status.

			**Hands-on Experiments**: I maintain a "playground" repository where I experiment with new tools and techniques.

			Remember: you don't need to learn everything, but you should always be learning something.
		`,
	},
	"frontend-vs-backend": {
		title: "Backend vs Frontend: My Journey",
		date: "December 5, 2024",
		readTime: "6 min read",
		tags: ["Full Stack", "Backend", "Frontend", "Career"],
		content: `
			I often get asked whether I prefer frontend or backend development. The truth is, I've found immense value in both, and my journey across the stack has shaped me into a more well-rounded developer.

			## My Backend Beginnings

			I started my career primarily focused on backend development. There's something deeply satisfying about architecting systems, designing APIs, and solving complex data problems. Backend development taught me:

			**Systems Thinking**: Understanding how different components interact and scale
			**Data Modeling**: Designing efficient database schemas and relationships
			**Performance Optimization**: Writing efficient queries and optimizing server resources
			**Security Mindset**: Implementing authentication, authorization, and data protection

			Working with technologies like Node.js, PostgreSQL, and Redis gave me a solid foundation in how applications actually work under the hood.

			## The Frontend Transition

			As I grew in my career, I found myself increasingly drawn to the frontend. There's an immediate gratification in frontend work—you can see your changes instantly, and the user experience is tangible. Frontend development opened my eyes to:

			**User Experience**: How small design decisions can dramatically impact usability
			**Performance from a User's Perspective**: Optimizing for perceived performance, not just server metrics
			**Accessibility**: Building applications that work for everyone
			**Modern Tooling**: The incredible ecosystem of tools that make frontend development powerful

			React, TypeScript, and modern CSS have become some of my favorite tools to work with.

			## The Full Stack Advantage

			Being comfortable with both sides of the stack has been incredibly valuable:

			### Better Communication
			I can speak the language of both frontend and backend teams, which makes collaboration smoother and more effective.

			### End-to-End Problem Solving
			When debugging issues, I can trace problems from the UI all the way down to the database, which speeds up resolution times significantly.

			### Architecture Decisions
			Understanding both perspectives helps me make better decisions about API design, data flow, and application architecture.

			## Where I Find Joy

			If I'm being honest, I find the most joy in the intersection between frontend and backend—building APIs that are a pleasure to work with, optimizing data flow between client and server, and creating seamless user experiences that are powered by robust backend systems.

			The modern web is about bringing these two worlds together, and I love being able to contribute to both sides of that equation.
		`,
	},
};

export default function BlogPostPage() {
	const { id } = useParams();
	const post = posts[id as keyof typeof posts];

	if (!post) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					className="text-center"
				>
					<h1 className="text-4xl font-bold text-gray-800 mb-4">
						Post Not Found
					</h1>
					<p className="text-gray-600 mb-8">
						The blog post you&apos;re looking for doesn&apos;t exist.
					</p>
					<Link
						href="/blogs"
						className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
					>
						Back to Blog
					</Link>
				</motion.div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
			<div className="container mx-auto px-6 py-12 max-w-4xl">
				{/* Back Button */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Link
						href="/blogs"
						className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
					>
						<motion.svg
							className="mr-2 w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							animate={{ x: [-2, 0, -2] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
								ease: "easeInOut",
							}}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</motion.svg>
						<span className="font-medium">Back to Blog</span>
					</Link>
				</motion.div>

				{/* Article Header */}
				<motion.header
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mb-12"
				>
					{/* Tags */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex flex-wrap gap-2 mb-6"
					>
						{post.tags.map((tag, index) => (
							<motion.span
								key={tag}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
								className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full"
							>
								{tag}
							</motion.span>
						))}
					</motion.div>

					{/* Title */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
					>
						{post.title}
					</motion.h1>

					{/* Meta Information */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="flex items-center text-gray-600 text-sm"
					>
						<span className="mr-4">{post.date}</span>
						<span className="mr-4">•</span>
						<span>{post.readTime}</span>
					</motion.div>

					{/* Gradient Line */}
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 w-24 mt-8 rounded-full"
					/>
				</motion.header>

				{/* Article Content */}
				<motion.article
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
				>
					<div
						className="prose prose-lg max-w-none
							prose-headings:text-gray-800 prose-headings:font-bold
							prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
							prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
							prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
							prose-strong:text-gray-800 prose-strong:font-semibold
							prose-ul:my-6 prose-li:my-2
							prose-code:bg-blue-100 prose-code:text-blue-800 prose-code:px-2 prose-code:py-1 prose-code:rounded"
						dangerouslySetInnerHTML={{
							__html: post.content
								.replace(/\n\t\t\t/g, "\n")
								.replace(/## /g, "<h2>")
								.replace(/### /g, "<h3>")
								.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
								.replace(/- \*\*(.*?)\*\*:/g, "<li><strong>$1</strong>:</li>")
								.replace(/- /g, "<li>")
								.replace(/\n\n/g, "</p><p>")
								.replace(/^/, "<p>")
								.replace(/$/, "</p>")
								.replace(/<p><h/g, "<h")
								.replace(/<\/h([1-6])><\/p>/g, "</h$1>")
								.replace(/<p><li>/g, "<ul><li>")
								.replace(/<\/li><\/p>/g, "</li></ul>")
								.replace(/<\/ul><ul>/g, ""),
						}}
					/>
				</motion.article>

				{/* Navigation */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.7 }}
					className="mt-12 text-center"
				>
					<Link href="/blogs">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							Read More Posts
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
