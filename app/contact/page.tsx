"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ContactFormProps {
	className?: string;
	onSubmitSuccess?: () => void;
	onSubmitError?: (error: Error) => void;
}

export default function ContactForm({
	className = "",
	onSubmitSuccess,
	onSubmitError,
}: ContactFormProps) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// Simulate API call - replace with your actual endpoint
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// For now, just log the form data
			console.log("Form submitted:", formData);

			setSubmitStatus("success");
			setFormData({ name: "", email: "", subject: "", message: "" });
			onSubmitSuccess?.();
		} catch (error) {
			console.error("Error submitting form:", error);
			setSubmitStatus("error");
			onSubmitError?.(error as Error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className={`max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-6 sm:p-8 ${className}`}
		>
			{/* Header */}
			<div className="text-center mb-6">
				<h2 className="text-2xl font-bold text-gray-800 mb-2">Get In Touch</h2>
				<p className="text-gray-600 text-sm">
					Let&apos;s discuss your next project
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Name *
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							value={formData.name}
							onChange={handleInputChange}
							className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
							placeholder="Your name"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Email *
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							value={formData.email}
							onChange={handleInputChange}
							className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
							placeholder="your@email.com"
						/>
					</div>
				</div>

				<div>
					<label
						htmlFor="subject"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Subject *
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						required
						value={formData.subject}
						onChange={handleInputChange}
						className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
						placeholder="What's this about?"
					/>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Message *
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={4}
						value={formData.message}
						onChange={handleInputChange}
						className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
						placeholder="Tell me about your project..."
					/>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-blue-600 text-white py-2.5 px-4 text-sm font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? (
						<span className="flex items-center justify-center">
							<svg
								className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Sending...
						</span>
					) : (
						"Send Message"
					)}
				</button>

				{submitStatus === "success" && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
					>
						✅ Thank you! Your message has been sent successfully.
					</motion.div>
				)}

				{submitStatus === "error" && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
					>
						❌ Sorry, there was an error. Please try again.
					</motion.div>
				)}
			</form>

			{/* Social Links */}
			<div className="pt-4 border-t border-gray-200">
				<p className="text-center text-sm text-gray-600 mb-3">
					Or connect with me on social media
				</p>
				<div className="flex justify-center space-x-3">
					<a
						href="https://linkedin.com/in/daniel-mallett"
						target="_blank"
						rel="noopener noreferrer"
						className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
						aria-label="LinkedIn Profile"
					>
						<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
					<a
						href="https://github.com/daniel-mallett"
						target="_blank"
						rel="noopener noreferrer"
						className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
						aria-label="GitHub Profile"
					>
						<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
					<a
						href="https://twitter.com/daniel_mallett"
						target="_blank"
						rel="noopener noreferrer"
						className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
						aria-label="Twitter Profile"
					>
						<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
						</svg>
					</a>
				</div>
			</div>
		</motion.div>
	);
}
