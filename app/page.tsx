"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Resume from "../components/Resume/Resume";
import Header from "@/components/Header/Header";

export default function HomePage() {
	return (
		<div className="bg-white text-gray-900 container-xl max-w-full mx-auto">
			<Header />

			<main className="container mx-auto p-4 space-y-12">
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center py-20"
				>
					<motion.h1
						className="text-5xl font-bold mb-6 text-gray-800"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Hi, I&apos;m Daniel Mallett
					</motion.h1>
					<motion.p
						className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						A passionate FullStack Developer creating modern web applications
						with cutting-edge technologies.
					</motion.p>
					<motion.div
						className="flex gap-4 justify-center"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<Link
							href="/projects"
							className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							View My Work
						</Link>
						<Link
							href="/contact"
							className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
						>
							Get In Touch
						</Link>
					</motion.div>
				</motion.section>

				<motion.section
					className="grid md:grid-cols-3 gap-8 py-16"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<motion.div
						className="text-center p-6 bg-gray-50 rounded-lg"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						<h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
						<p className="text-gray-600">
							Creating responsive and interactive user interfaces with React,
							Next.js, and modern CSS frameworks.
						</p>
					</motion.div>

					<motion.div
						className="text-center p-6 bg-gray-50 rounded-lg"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						<h3 className="text-xl font-semibold mb-3">Backend Development</h3>
						<p className="text-gray-600">
							Building scalable server-side applications with Node.js,
							databases, and cloud services.
						</p>
					</motion.div>

					<motion.div
						className="text-center p-6 bg-gray-50 rounded-lg"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						<h3 className="text-xl font-semibold mb-3">Full Stack Solutions</h3>
						<p className="text-gray-600">
							Delivering complete web applications from concept to deployment
							with modern best practices.
						</p>
					</motion.div>
				</motion.section>
				<Resume />
			</main>

			<footer className="text-center p-4 mt-8 border-t text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Daniel Mallett. All rights reserved.
			</footer>
		</div>
	);
}
