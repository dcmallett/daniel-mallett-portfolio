"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const posts = {
	"nextjs-portfolio": {
		title: "Why I Built My Portfolio with Next.js",
		content:
			"This is a detailed breakdown of how and why I built my portfolio using Next.js and Tailwind CSS...",
	},
	"keep-learning": {
		title: "How to Keep Learning as a Developer",
		content:
			"Being a developer means constantly learning. Here are a few key methods I use to keep up...",
	},
	"frontend-vs-backend": {
		title: "Backend vs Frontend: My Journey",
		content:
			"From backend APIs to frontend polish, I’ve worked across the full stack. Here’s what I’ve learned...",
	},
};

export default function BlogPostPage() {
	const { slug } = useParams();
	const post = posts[slug as keyof typeof posts];

	if (!post) return <p>Post not found.</p>;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<h1 className="text-3xl font-bold mb-4">{post.title}</h1>
			<p className="text-gray-800 leading-7">{post.content}</p>
		</motion.div>
	);
}
