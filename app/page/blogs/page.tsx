"use client";
import { motion } from "framer-motion";

const posts = [
	{
		title: "Why I Built My Portfolio with Next.js",
		excerpt:
			"A deep dive into building a fast, modern developer portfolio with Next.js and Tailwind CSS.",
	},
	{
		title: "How to Keep Learning as a Developer",
		excerpt:
			"Tips and strategies for continuous improvement and staying current in tech.",
	},
	{
		title: "Backend vs Frontend: My Journey",
		excerpt:
			"A personal reflection on working across the stack and where I’ve found the most joy.",
	},
];

export default function BlogPage() {
	return (
		<div>
			<h2 className="text-3xl font-bold mb-6">Blog</h2>
			<div className="grid gap-6">
				{posts.map((post, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.1 }}
						className="p-4 border rounded shadow-sm"
					>
						<h3 className="text-xl font-semibold mb-2">{post.title}</h3>
						<p className="text-gray-700">{post.excerpt}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
}
