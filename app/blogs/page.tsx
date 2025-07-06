"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
	{
		id: "nextjs-portfolio",
		title: "Why I Built My Portfolio with Next.js",
		excerpt:
			"A deep dive into building a fast, modern developer portfolio with Next.js and Tailwind CSS.",
	},
	{
		id: "keep-learning",
		title: "How to Keep Learning as a Developer",
		excerpt:
			"Tips and strategies for continuous improvement and staying current in tech.",
	},
	{
		id: "frontend-vs-backend",
		title: "Backend vs Frontend: My Journey",
		excerpt:
			"A personal reflection on working across the stack and where I've found the most joy.",
	},
];

export default function BlogPage() {
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
						<Link key={post.id} href={`/blogs/${post.id}`}>
							<motion.article
								initial={{ opacity: 0, y: 30, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{ 
									duration: 0.5, 
									delay: idx * 0.15,
									type: "spring",
									stiffness: 100
								}}
								whileHover={{ 
									y: -8, 
									scale: 1.02,
									transition: { duration: 0.2 }
								}}
								whileTap={{ scale: 0.98 }}
								className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
							>
								{/* Gradient Border Effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-0.5">
									<div className="bg-white rounded-2xl h-full w-full" />
								</div>
								
								{/* Content */}
								<div className="relative p-8">
									{/* Category Badge */}
									<motion.span
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: idx * 0.15 + 0.3 }}
										className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4"
									>
										Development
									</motion.span>

									{/* Title */}
									<motion.h3
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: idx * 0.15 + 0.4 }}
										className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2"
									>
										{post.title}
									</motion.h3>

									{/* Excerpt */}
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: idx * 0.15 + 0.5 }}
										className="text-gray-600 leading-relaxed mb-6 line-clamp-3"
									>
										{post.excerpt}
									</motion.p>

									{/* Read More */}
									<motion.div
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: idx * 0.15 + 0.6 }}
										className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
									>
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
												ease: "easeInOut"
											}}
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</motion.svg>
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
					<p className="text-gray-600 mb-6">Want to stay updated with my latest posts?</p>
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