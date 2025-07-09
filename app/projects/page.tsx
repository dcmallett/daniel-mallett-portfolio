"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types/notion";

const tabs = ["All", "Completed", "In Progress"] as const;
type Tab = (typeof tabs)[number];

const projectData: Record<Tab, Project[]> = {
	Frontend: [
		{
			title: "Portfolio Website",
			description:
				"A sleek, modern personal portfolio showcasing my work with beautiful animations and responsive design. Built with performance and user experience in mind.",
			technologies: [
				"Next.js",
				"React",
				"Tailwind CSS",
				"Framer Motion",
				"TypeScript",
			],
			github: "https://github.com/danielmallett/portfolio",
			demo: "https://danielmallett.dev",
			featured: true,
		},
		{
			title: "E-Commerce Landing Page",
			description:
				"High-converting landing page for a SaaS product with advanced animations, optimized for conversions and mobile-first design.",
			technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
			github: "https://github.com/danielmallett/landing",
			demo: "https://landing-demo.vercel.app",
		},
		{
			title: "Weather Dashboard",
			description:
				"Beautiful weather application with real-time data, interactive charts, and location-based forecasting.",
			technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
			github: "https://github.com/danielmallett/weather",
			demo: "https://weather-app-demo.vercel.app",
		},
	],
	Backend: [
		{
			title: "RESTful API Service",
			description:
				"Scalable RESTful API with advanced authentication, rate limiting, and comprehensive documentation. Handles 10k+ requests per minute.",
			technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
			github: "https://github.com/danielmallett/api-service",
			featured: true,
		},
		{
			title: "Real-time Chat System",
			description:
				"High-performance chat application with WebSocket connections, message persistence, and user presence indicators.",
			technologies: ["Node.js", "Socket.io", "MongoDB", "Express"],
			github: "https://github.com/danielmallett/chat-system",
		},
		{
			title: "Authentication Microservice",
			description:
				"Robust authentication system with JWT tokens, role-based access control, and OAuth integration.",
			technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "OAuth"],
			github: "https://github.com/danielmallett/auth-service",
		},
	],
	Fullstack: [
		{
			title: "Project Management Platform",
			description:
				"Comprehensive project management tool with real-time collaboration, task tracking, and team analytics. Built for modern teams.",
			technologies: [
				"Next.js",
				"Node.js",
				"PostgreSQL",
				"Socket.io",
				"Tailwind CSS",
			],
			github: "https://github.com/danielmallett/project-manager",
			demo: "https://pm-platform-demo.vercel.app",
			featured: true,
		},
		{
			title: "Social Media Dashboard",
			description:
				"Analytics dashboard for social media management with data visualization, scheduled posting, and engagement tracking.",
			technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
			github: "https://github.com/danielmallett/social-dashboard",
		},
	],
};

const tabIcons = {
	Frontend: (
		<svg
			className="w-5 h-5"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
			/>
		</svg>
	),
	Backend: (
		<svg
			className="w-5 h-5"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
			/>
		</svg>
	),
	Fullstack: (
		<svg
			className="w-5 h-5"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
			/>
		</svg>
	),
};

export default function ProjectsPage() {
	const [activeTab, setActiveTab] = useState<Tab>("Frontend");

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
						My <span className="text-blue-600">Projects</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						A showcase of my work across different technologies and domains.
						From beautiful frontends to robust backends and everything in
						between.
					</p>
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 w-24 mx-auto mt-6 rounded-full"
					/>
				</motion.div>

				{/* Tab Navigation */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="flex justify-center mb-12"
				>
					<div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
						{tabs.map((tab) => (
							<motion.button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
									activeTab === tab
										? "text-white"
										: "text-gray-600 hover:text-gray-800"
								}`}
								whileHover={{ scale: activeTab === tab ? 1 : 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{activeTab === tab && (
									<motion.div
										layoutId="activeTab"
										className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg"
										transition={{ type: "spring", stiffness: 300, damping: 30 }}
									/>
								)}
								<span className="relative z-10 flex items-center space-x-2">
									{tabIcons[tab]}
									<span>{tab}</span>
								</span>
							</motion.button>
						))}
					</div>
				</motion.div>

				{/* Projects Grid */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4 }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{projectData[activeTab].map((project, idx) => (
							<motion.div
								key={`${activeTab}-${idx}`}
								initial={{ opacity: 0, y: 30, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									duration: 0.5,
									delay: idx * 0.1,
									type: "spring",
									stiffness: 100,
								}}
								whileHover={{ y: -8, transition: { duration: 0.2 } }}
								className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border ${
									project.featured
										? "border-blue-200 ring-2 ring-blue-100"
										: "border-gray-100"
								}`}
							>
								{/* Featured Badge */}
								{project.featured && (
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: idx * 0.1 + 0.3 }}
										className="absolute top-4 right-4 z-10"
									>
										<span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
											⭐ Featured
										</span>
									</motion.div>
								)}

								{/* Gradient Border Effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-0.5">
									<div className="bg-white rounded-2xl h-full w-full" />
								</div>

								{/* Content */}
								<div className="relative p-8">
									{/* Title */}
									<motion.h3
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: idx * 0.1 + 0.4 }}
										className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200"
									>
										{project.title}
									</motion.h3>

									{/* Description */}
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: idx * 0.1 + 0.5 }}
										className="text-gray-600 leading-relaxed mb-6 text-sm"
									>
										{project.description}
									</motion.p>

									{/* Technologies */}
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: idx * 0.1 + 0.6 }}
										className="mb-6"
									>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech, techIdx) => (
												<motion.span
													key={tech}
													initial={{ opacity: 0, scale: 0.8 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{
														delay: idx * 0.1 + 0.7 + techIdx * 0.05,
													}}
													className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full border border-blue-100"
												>
													{tech}
												</motion.span>
											))}
										</div>
									</motion.div>

									{/* Action Buttons */}
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: idx * 0.1 + 0.8 }}
										className="flex space-x-3"
									>
										{project.github && (
											<motion.a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<svg
													className="w-4 h-4"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
												</svg>
												<span>Code</span>
											</motion.a>
										)}
										{project.demo && (
											<motion.a
												href={project.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
												<span>Demo</span>
											</motion.a>
										)}
									</motion.div>
								</div>

								{/* Bottom Gradient */}
								<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="text-center mt-16"
				>
					<p className="text-gray-600 mb-6">Interested in working together?</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
					>
						Get In Touch
					</motion.button>
				</motion.div>
			</div>
		</div>
	);
}
