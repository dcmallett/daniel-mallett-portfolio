"use client";

import { motion } from "framer-motion";
import React from "react";

const Resume = () => {
	return (
		<div className="container-2xl mx-auto px-auto max-w-4xl">
			<motion.section
				className="py-16"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 1.0 }}
			>
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.2 }}
				>
					<h2 className="text-4xl font-bold text-gray-800 mb-4">
						Professional Growth Path
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						My journey of continuous learning and evolution in the digital
						landscape
					</p>
				</motion.div>

				<div className="space-y-8">
					{/* Frontend Engineer - Loan.co.uk */}
					<motion.div
						className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 1.4 }}
					>
						<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
							<div>
								<h3 className="text-2xl font-bold text-gray-800">
									Frontend Engineer
								</h3>
								<p className="text-lg text-blue-600 font-semibold">
									Loan.co.uk
								</p>
							</div>
							<span className="text-gray-500 font-medium mt-2 md:mt-0">
								Sep 2024 – Present
							</span>
						</div>

						<p className="text-gray-700 mb-6 leading-relaxed">
							Led the end-to-end modernization of the consumer-facing platform,
							owning frontend architecture from initial system design through to
							production delivery. Contributed across discovery, scoping, design
							system strategy, documentation, and cross-team delivery.
						</p>

						<div className="mb-6">
							<h4 className="text-lg font-semibold text-gray-800 mb-3">
								Technologies
							</h4>
							<div className="flex flex-wrap gap-2">
								{[
									"TypeScript",
									"PHP",
									"Node.js",
									"Symfony",
									"Next.js",
									"Tailwind CSS",
									"React",
									"Storybook",
								].map((tech) => (
									<span
										key={tech}
										className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div>
							<h4 className="text-lg font-semibold text-gray-800 mb-3">
								Key Contributions
							</h4>
							<ul className="space-y-2 text-gray-700">
								<li className="flex items-start">
									<span className="text-blue-600 mr-2 mt-1">•</span>
									Architected a scalable frontend system using Next.js and
									Storybook, aligning design, engineering, and business needs.
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2 mt-1">•</span>
									Delivered production-ready UI from flow diagrams and component
									maps, ensuring consistency across dynamic mortgage journeys.
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2 mt-1">•</span>
									Created onboarding guides, architecture diagrams, and coding
									standards to support scaling the frontend team.
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2 mt-1">•</span>
									Drove cross-functional planning, collaborating with product
									and backend teams to scope and prioritize features.
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2 mt-1">•</span>
									Elevated velocity and maintainability by introducing reusable
									design patterns and system-first documentation.
								</li>
							</ul>
						</div>
					</motion.div>

					{/* BigCommerce Developer - IDHL */}
					<motion.div
						className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 1.6 }}
					>
						<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
							<div>
								<h3 className="text-2xl font-bold text-gray-800">
									BigCommerce Developer
								</h3>
								<p className="text-lg text-green-600 font-semibold">IDHL</p>
							</div>
							<span className="text-gray-500 font-medium mt-2 md:mt-0">
								Jul 2023 – Aug 2024
							</span>
						</div>

						<p className="text-gray-700 mb-6 leading-relaxed">
							Led the development of custom BigCommerce storefronts and
							Next.js-powered PWAs, balancing high-quality code with
							client-focused leadership. Championed estimation accuracy,
							scalable architecture, and mentorship across project teams.
						</p>

						<div className="mb-6">
							<h4 className="text-lg font-semibold text-gray-800 mb-3">
								Technologies
							</h4>
							<div className="flex flex-wrap gap-2">
								{[
									"BigCommerce",
									"Stencil.js",
									"React",
									"Next.js",
									"TypeScript",
									"Tailwind CSS",
								].map((tech) => (
									<span
										key={tech}
										className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div>
							<h4 className="text-lg font-semibold text-gray-800 mb-3">
								Key Contributions
							</h4>
							<ul className="space-y-2 text-gray-700">
								<li className="flex items-start">
									<span className="text-green-600 mr-2 mt-1">•</span>
									Delivered projects on time and within budget by owning scope,
									estimates, and quality assurance
								</li>
								<li className="flex items-start">
									<span className="text-green-600 mr-2 mt-1">•</span>
									Acted as the primary technical lead for client queries,
									unblockers, and escalation points across multiple projects
								</li>
								<li className="flex items-start">
									<span className="text-green-600 mr-2 mt-1">•</span>
									Wrote clear technical specs, broke down work for junior and
									mid-level devs, and ensured delivery aligned with business
									goals
								</li>
								<li className="flex items-start">
									<span className="text-green-600 mr-2 mt-1">•</span>
									Architected and implemented custom BigCommerce extensions to
									meet complex client needs
								</li>
								<li className="flex items-start">
									<span className="text-green-600 mr-2 mt-1">•</span>
									Contributed to evolving internal development standards and
									driving team-wide adoption of best practices
								</li>
							</ul>
						</div>
					</motion.div>

					{/* Full Stack Engineer - Hiyield */}
					<motion.div
						className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-600"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 1.8 }}
					>
						<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
							<div>
								<h3 className="text-2xl font-bold text-gray-800">
									Full Stack Engineer
								</h3>
								<p className="text-lg text-purple-600 font-semibold">Hiyield</p>
							</div>
							<span className="text-gray-500 font-medium mt-2 md:mt-0">
								Jul 2021 – Jul 2023
							</span>
						</div>

						<p className="text-gray-700 mb-6 leading-relaxed">
							Built and deployed web apps across marketing and e-commerce
							domains, integrating CMS, APIs, and secure payment workflows.
						</p>

						<div className="mb-6">
							<h4 className="text-lg font-semibold text-gray-800 mb-3">
								Technologies
							</h4>
							<div className="flex flex-wrap gap-2">
								{[
									"Vue 3",
									"Nuxt 3",
									"Prismic",
									"Storyblok",
									"Tailwind CSS",
									"Node.js",
									"Django REST",
									"PostgreSQL",
									"Docker",
									"GCP",
									"Stripe",
								].map((tech) => (
									<span
										key={tech}
										className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div>
							<h4 className="text-lg font-semibold text-gray-800 mb-3">
								Key Contributions
							</h4>
							<ul className="space-y-2 text-gray-700">
								<li className="flex items-start">
									<span className="text-purple-600 mr-2 mt-1">•</span>
									Led integrations with Firebase, Stripe, Mailchimp, and Google
									Cloud Functions
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2 mt-1">•</span>
									Delivered robust headless e-commerce solutions using
									BigCommerce
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2 mt-1">•</span>
									Mentored junior devs and implemented modern DevOps practices
								</li>
							</ul>
						</div>
					</motion.div>

					{/* React Developer - CodeCareer.io */}
					<motion.div
						className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-600"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 2.0 }}
					>
						<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
							<div>
								<h3 className="text-2xl font-bold text-gray-800">
									React Developer
								</h3>
								<p className="text-lg text-orange-600 font-semibold">
									CodeCareer.io
								</p>
							</div>
							<span className="text-gray-500 font-medium mt-2 md:mt-0">
								Oct 2020 – Apr 2021
							</span>
						</div>

						<p className="text-gray-700 mb-6 leading-relaxed">
							Maintained and optimized a job board platform by building custom
							hooks, automations, and performance enhancements.
						</p>

						<div className="mb-6">
							<h4 className="text-lg font-semibold text-gray-800 mb-3">
								Technologies
							</h4>
							<div className="flex flex-wrap gap-2">
								{[
									"React.js",
									"Tailwind CSS",
									"MongoDB",
									"Express.js",
									"Python",
								].map((tech) => (
									<span
										key={tech}
										className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div>
							<h4 className="text-lg font-semibold text-gray-800 mb-3">
								Key Contributions
							</h4>
							<ul className="space-y-2 text-gray-700">
								<li className="flex items-start">
									<span className="text-orange-600 mr-2 mt-1">•</span>
									Implemented CRUD UI for job listings with clean, modular
									components
								</li>
								<li className="flex items-start">
									<span className="text-orange-600 mr-2 mt-1">•</span>
									Automated data fetching and normalization with Python scripts
								</li>
								<li className="flex items-start">
									<span className="text-orange-600 mr-2 mt-1">•</span>
									Reduced frontend rendering bottlenecks by optimizing the
									critical rendering path
								</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</motion.section>
		</div>
	);
};

export default Resume;
