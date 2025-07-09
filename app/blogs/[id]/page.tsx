"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/types/notion";

export default function BlogPostPage() {
	const params = useParams();
	const [post, setPost] = useState<BlogPost | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchPost() {
			try {
				const response = await fetch("/api/blog");
				if (!response.ok) {
					throw new Error("Failed to fetch posts");
				}
				const data = await response.json();
				const foundPost = data.posts.find(
					(p: BlogPost) => p.slug === params.id || p.id === params.id
				);

				if (!foundPost) {
					throw new Error("Post not found");
				}

				setPost(foundPost);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
			} finally {
				setLoading(false);
			}
		}

		if (params.id) {
			fetchPost();
		}
	}, [params.id]);

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
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Post Not Found
					</h1>
					<p className="text-gray-600 mb-8">
						The blog post you&apos;re looking for doesn&apos;t exist.
					</p>
					<Link
						href="/blogs"
						className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
					>
						← Back to Blog
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0 bg-black opacity-20"></div>
					<div
						className="h-full w-full"
						style={{
							backgroundImage:
								"radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)",
							backgroundSize: "30px 30px",
						}}
					></div>
				</div>
				<div className="relative container mx-auto px-4 py-12 md:py-16">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto"
					>
						{/* Back Button */}
						<Link
							href="/blogs"
							className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors group text-sm"
						>
							<svg
								className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
							Back to Blog
						</Link>

						{/* Author Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="flex items-center mb-6"
						>
							{post.profileImage ? (
								<div className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-white/20">
									<Image
										src={post.profileImage}
										alt="Daniel Mallett"
										width={40}
										height={40}
										className="object-cover w-full h-full"
									/>
								</div>
							) : (
								<div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
									<span className="text-white font-semibold text-sm">DM</span>
								</div>
							)}
							<div>
								<p className="text-white font-medium text-sm">Daniel Mallett</p>
								<p className="text-slate-300 text-xs">Full Stack Developer</p>
							</div>
						</motion.div>

						{/* Title */}
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
						>
							{post.title}
						</motion.h1>

						{/* Tags */}
						{post.tags && post.tags.length > 0 && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className="flex flex-wrap gap-2 mb-6"
							>
								{post.tags.map((tag, index) => (
									<span
										key={index}
										className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/20"
									>
										{tag}
									</span>
								))}
							</motion.div>
						)}

						{/* Date and Reading Time */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="flex flex-wrap items-center text-slate-300 gap-4 text-sm"
						>
							<div className="flex items-center">
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<time>
									{new Date(post.publishedDate).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</time>
							</div>
							<div className="flex items-center">
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span>
									{Math.max(1, Math.ceil((post.summary?.length || 200) / 200))}{" "}
									min read
								</span>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Featured Image Section */}
			<div className="container mx-auto px-4 -mt-6 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="max-w-4xl mx-auto"
				>
					{post.image ? (
						<div className="relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
							<Image
								src={post.image}
								alt={post.title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
						</div>
					) : (
						<div className="relative h-56 md:h-72 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200">
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center">
									<svg
										className="w-16 h-16 text-slate-400 mx-auto mb-4"
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
									<p className="text-slate-500 font-medium">Featured Image</p>
									<p className="text-slate-400 text-sm">Coming Soon</p>
								</div>
							</div>
							<div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/10" />
						</div>
					)}
				</motion.div>
			</div>

			{/* Main Content */}
			<div className="container mx-auto px-4 py-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="max-w-4xl mx-auto"
				>
					{/* Article Content */}
					<article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
						{/* Summary Section */}
						{post.summary && (
							<div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 md:px-12 py-8 border-b border-slate-200">
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
										<svg
											className="w-5 h-5 text-blue-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
											/>
										</svg>
									</div>
									<div className="flex-1">
										<h2 className="text-lg font-semibold text-slate-900 mb-3">
											Summary
										</h2>
										<p className="text-slate-600 text-base leading-relaxed">
											{post.summary}
										</p>
									</div>
								</div>
							</div>
						)}

						{/* Main Content */}
						<div className="px-8 md:px-12 py-10">
							<div className="prose prose-lg prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed">
								<div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
									<div className="flex items-start">
										<svg
											className="w-6 h-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<div>
											<h3 className="text-amber-800 font-semibold mb-2">
												Content Coming Soon
											</h3>
											<p className="text-amber-700 text-sm">
												Full blog content parsing is currently being developed.
												For now, you can read the summary above.
											</p>
										</div>
									</div>
								</div>

								{/* Placeholder content - in a real implementation, this would be the parsed Notion content */}
								<div className="space-y-6 text-slate-700 leading-relaxed">
									<p>
										This is where the full blog content would appear once we
										implement Notion content parsing. The content would be rich
										text with proper formatting, images, code blocks, and more.
									</p>
									<div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
										<p className="text-slate-600 italic">
											&quot;The summary above provides a preview of what this
											post covers. Full content rendering from Notion blocks
											will be implemented in a future update.&quot;
										</p>
									</div>
								</div>
							</div>
						</div>
					</article>

					{/* Navigation & Actions */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center"
					>
						<Link
							href="/blogs"
							className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-200 group shadow-md hover:shadow-lg"
						>
							<svg
								className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
							Back to All Posts
						</Link>

						<div className="flex gap-3">
							<button className="inline-flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
									/>
								</svg>
								Share
							</button>
							<Link
								href="/contact"
								className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
							>
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
								Discuss
							</Link>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
