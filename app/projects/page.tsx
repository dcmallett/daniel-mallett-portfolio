"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Frontend", "Backend", "Fullstack"] as const;
type Tab = (typeof tabs)[number];

interface Project {
	title: string;
	description: string;
}

const projectData: Record<Tab, Project[]> = {
	Frontend: [
		{
			title: "Portfolio Website",
			description: "A sleek personal portfolio built with React and Tailwind.",
		},
		{
			title: "Landing Page",
			description: "High-converting landing page for a SaaS product.",
		},
	],
	Backend: [
		{
			title: "API Service",
			description: "RESTful API using Node.js and Express.",
		},
		{
			title: "Authentication System",
			description: "JWT-based auth with role support.",
		},
	],
	Fullstack: [
		{
			title: "Task Manager",
			description: "A full-featured app using Next.js and MongoDB.",
		},
	],
};

export default function ProjectsPage() {
	const [activeTab, setActiveTab] = useState<Tab>("Frontend");

	return (
		<div>
			<h2 className="text-3xl font-bold mb-6">My Projects</h2>
			<div className="flex space-x-4 mb-6">
				{tabs.map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`px-4 py-2 rounded transition-colors duration-300 ${
							activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
						}`}
					>
						{tab}
					</button>
				))}
			</div>
			<AnimatePresence mode="wait">
				<motion.div
					key={activeTab}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{ duration: 0.3 }}
					className="grid gap-4"
				>
					{projectData[activeTab].map((project, idx) => (
						<div key={idx} className="p-4 border rounded shadow-sm">
							<h3 className="font-semibold text-lg">{project.title}</h3>
							<p className="text-gray-700">{project.description}</p>
						</div>
					))}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
