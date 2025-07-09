"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/types/notion";

export default function BlogPage() {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchPosts() {
			try {
				const response = await fetch("/api/blog");
				if (!response.ok) {
					throw new Error("Failed to fetch posts");
				}
				const data = await response.json();
				setPosts(data.posts || []);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
				// Fallback to static posts if Notion fails
				setPosts([
					{
						id: "nextjs-portfolio",
						title: "Why I Built My Portfolio with Next.js",
						summary:
							"A deep dive into building a fast, modern developer portfolio with Next.js and Tailwind CSS.",
						publishedDate: new Date().toISOString(),
						tags: ["Next.js", "Portfolio"],
						slug: "nextjs-portfolio",
						status: "Published",
						image:
							"https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
					},
					{
						id: "keep-learning",
						title: "How to Keep Learning as a Developer",
						summary:
							"Tips and strategies for continuous improvement and staying current in tech.",
						publishedDate: new Date().toISOString(),
						tags: ["Learning", "Career"],
						slug: "keep-learning",
						status: "Published",
						image:
							"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
					},
				]);
			} finally {
				setLoading(false);
			}
		}

		fetchPosts();
	}, []);

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

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
			<div className="container mx-auto px-6 py-12">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h1 className="text-5xl font-bold text-gray-800 mb-4">
						My <span className="text-blue-600">Blog</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Thoughts, insights, and experiences from my journey as a developer
					</p>
					{error && (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="mt-4 p-3 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg max-w-md mx-auto"
						>
							<p className="text-sm">
								Notion integration not configured. Showing sample posts.
							</p>
						</motion.div>
					)}
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 w-24 mx-auto mt-6 rounded-full"
					/>
				</motion.div>

				{/* Blog Posts Grid */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{posts.map((post, idx) => (
						<Link key={post.id} href={`/blogs/${post.slug}`}>
							<motion.article
								initial={{ opacity: 0, y: 30, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									duration: 0.5,
									delay: idx * 0.15,
									type: "spring",
									stiffness: 100,
								}}
								whileHover={{
									y: -8,
									scale: 1.02,
									transition: { duration: 0.2 },
								}}
								whileTap={{ scale: 0.98 }}
								className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
							>
								{/* Gradient Border Effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-0.5">
									<div className="bg-white rounded-2xl h-full w-full" />
								</div>

								{/* Image Section */}
								<div className="relative">
									{post.image ? (
										<div className="relative h-48 overflow-hidden rounded-t-2xl">
											<Image
												src={post.image}
												alt={post.title}
												fill
												className="object-cover transition-transform duration-300 group-hover:scale-110"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
										</div>
									) : (
										<div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-t-2xl flex items-center justify-center">
											<div className="text-center">
												<svg
													className="w-12 h-12 text-blue-400 mx-auto mb-2"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={1.5}
														d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
													/>
												</svg>
												<p className="text-sm text-blue-500 font-medium">
													Blog Image
												</p>
											</div>
											<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10" />
										</div>
									)}
								</div>

								{/* Content */}
								<div className="relative p-6">
									{/* Tags */}
									{post.tags && post.tags.length > 0 && (
										<motion.div
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: idx * 0.15 + 0.3 }}
											className="flex flex-wrap gap-2 mb-4"
										>
											{post.tags.slice(0, 2).map((tag) => (
												<span
													key={tag}
													className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full"
												>
													{tag}
												</span>
											))}
										</motion.div>
									)}

									{/* Title */}
									<motion.h3
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: idx * 0.15 + 0.4 }}
										className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2"
									>
										{post.title}
									</motion.h3>

									{/* Summary */}
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: idx * 0.15 + 0.5 }}
										className="text-gray-600 leading-relaxed mb-6 line-clamp-3"
									>
										{post.summary}
									</motion.p>

									{/* Date and Read More */}
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: idx * 0.15 + 0.6 }}
										className="flex items-center justify-between"
									>
										<span className="text-sm text-gray-500">
											{new Date(post.publishedDate).toLocaleDateString()}
										</span>
										<div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
											<span>Read More</span>
											<motion.svg
												className="ml-2 w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												animate={{ x: [0, 4, 0] }}
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
													d="M9 5l7 7-7 7"
												/>
											</motion.svg>
										</div>
									</motion.div>
								</div>

								{/* Bottom Gradient */}
								<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
							</motion.article>
						</Link>
					))}
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="text-center mt-16"
				>
					<p className="text-gray-600 mb-6">
						Want to stay updated with my latest posts?
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
					>
						Subscribe to Updates
					</motion.button>
				</motion.div>
			</div>
		</div>
	);
}
