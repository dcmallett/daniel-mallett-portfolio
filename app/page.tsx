"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Resume from "../components/Resume/Resume";
import MorphingText from "../components/MorphingText";
import FlipCard from "../components/FlipCard";
import ParallaxSection from "../components/ParallaxSection";

export default function HomePage() {
	const skills = [
		"FullStack Developer",
		"React Specialist",
		"Node.js Expert",
		"TypeScript Enthusiast",
		"UI/UX Designer",
	];

	return (
		<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white container-xl max-w-full mx-auto transition-colors duration-300">
			<main className="container mx-auto p-4 space-y-12">
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center py-20"
				>
					<motion.h1
						className="text-5xl font-bold mb-6 text-gray-800 dark:text-white"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Hi, I&apos;m Daniel Mallett
					</motion.h1>
					<motion.div
						className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						A passionate{" "}
						<MorphingText
							texts={skills}
							className="text-blue-600 dark:text-blue-400 font-semibold"
							duration={2.5}
						/>{" "}
						creating modern web applications with cutting-edge technologies.
					</motion.div>
					<motion.div
						className="flex gap-4 justify-center"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<Link
							href="/projects"
							className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
						>
							View My Work
						</Link>
						<Link
							href="/contact"
							className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105"
						>
							Get In Touch
						</Link>
					</motion.div>
				</motion.section>

				<ParallaxSection speed={0.3} className="py-16">
					<motion.section
						className="grid md:grid-cols-3 gap-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.8 }}
					>
						<FlipCard
							className="h-64"
							frontContent={
								<div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-lg h-full flex flex-col justify-center items-center shadow-lg">
									<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
										Frontend Development
									</h3>
									<p className="text-gray-600 dark:text-gray-300">
										Click to see technologies
									</p>
								</div>
							}
							backContent={
								<div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg h-full flex flex-col justify-center items-center shadow-lg">
									<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
										Technologies
									</h3>
									<ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
										<li>React & Next.js</li>
										<li>TypeScript</li>
										<li>TailwindCSS</li>
										<li>Framer Motion</li>
										<li>GSAP</li>
									</ul>
								</div>
							}
						/>

						<FlipCard
							className="h-64"
							frontContent={
								<div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-lg h-full flex flex-col justify-center items-center shadow-lg">
									<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
										Backend Development
									</h3>
									<p className="text-gray-600 dark:text-gray-300">
										Click to see technologies
									</p>
								</div>
							}
							backContent={
								<div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-lg h-full flex flex-col justify-center items-center shadow-lg">
									<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
										Technologies
									</h3>
									<ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
										<li>Node.js & Express</li>
										<li>Go & Java</li>
										<li>PostgreSQL & MongoDB</li>
										<li>REST APIs</li>
										<li>WebSocket</li>
									</ul>
								</div>
							}
						/>

						<FlipCard
							className="h-64"
							frontContent={
								<div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-lg h-full flex flex-col justify-center items-center shadow-lg">
									<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
										Full Stack Solutions
									</h3>
									<p className="text-gray-600 dark:text-gray-300">
										Click to see approach
									</p>
								</div>
							}
							backContent={
								<div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 rounded-lg h-full flex flex-col justify-center items-center shadow-lg">
									<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
										My Approach
									</h3>
									<ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
										<li>Modern Architecture</li>
										<li>Performance First</li>
										<li>User Experience</li>
										<li>Clean Code</li>
										<li>Testing & CI/CD</li>
									</ul>
								</div>
							}
						/>
					</motion.section>
				</ParallaxSection>
				<Resume />
			</main>

			<footer className="text-center p-4 mt-8 border-t text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Daniel Mallett. All rights reserved.
			</footer>
		</div>
	);
}
