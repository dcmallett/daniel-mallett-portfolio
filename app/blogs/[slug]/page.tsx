"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogPost {
	id: string;
	title: string;
	content: string;
	date: string;
	readTime: string;
	tags: string[];
	slug: string;
}

export default function BlogPostPage() {
	const { slug } = useParams();
	const [post, setPost] = useState<BlogPost | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchPost() {
			try {
				const response = await fetch(`/api/blog/${slug}`);
				if (!response.ok) {
					throw new Error("Post not found");
				}
				const data = await response.json();
				setPost(data.post);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
			} finally {
				setLoading(false);
			}
		}

		if (slug) {
			fetchPost();
		}
	}, [slug]);

	if (loading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
					className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
				/>
			</div>
		);
	}

	if (error || !post) {
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
					>
						{post.content.split("\n\n").map((paragraph, index) => {
							if (paragraph.startsWith("# ")) {
								return (
									<h1 key={index} className="text-3xl font-bold mt-8 mb-4">
										{paragraph.slice(2)}
									</h1>
								);
							}
							if (paragraph.startsWith("## ")) {
								return (
									<h2 key={index} className="text-2xl font-bold mt-6 mb-3">
										{paragraph.slice(3)}
									</h2>
								);
							}
							if (paragraph.startsWith("### ")) {
								return (
									<h3 key={index} className="text-xl font-bold mt-4 mb-2">
										{paragraph.slice(4)}
									</h3>
								);
							}
							return (
								<p key={index} className="mb-4">
									{paragraph}
								</p>
							);
						})}
					</div>
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
