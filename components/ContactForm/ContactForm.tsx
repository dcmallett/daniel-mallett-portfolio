"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import SubmitButton from "./SubmitButton";
import StatusMessage from "./StatusMessage";
import SocialLinks from "./SocialLinks";

interface ContactFormProps {
	className?: string;
	onSubmitSuccess?: () => void;
	onSubmitError?: (error: Error) => void;
	showSocialLinks?: boolean;
	socialLinks?: {
		linkedin?: string;
		github?: string;
		twitter?: string;
	};
}

export default function ContactForm({
	className = "",
	onSubmitSuccess,
	onSubmitError,
	showSocialLinks = true,
	socialLinks,
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
					<FormInput
						id="name"
						name="name"
						type="text"
						label="Name"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="Your name"
						required
					/>
					<FormInput
						id="email"
						name="email"
						type="email"
						label="Email"
						value={formData.email}
						onChange={handleInputChange}
						placeholder="your@email.com"
						required
					/>
				</div>

				<FormInput
					id="subject"
					name="subject"
					type="text"
					label="Subject"
					value={formData.subject}
					onChange={handleInputChange}
					placeholder="What's this about?"
					required
				/>

				<FormTextarea
					id="message"
					name="message"
					label="Message"
					value={formData.message}
					onChange={handleInputChange}
					placeholder="Tell me about your project..."
					rows={4}
					required
				/>

				<SubmitButton isSubmitting={isSubmitting}>Send Message</SubmitButton>

				{submitStatus === "success" && (
					<StatusMessage
						status="success"
						message="Thank you! Your message has been sent successfully."
					/>
				)}

				{submitStatus === "error" && (
					<StatusMessage
						status="error"
						message="Sorry, there was an error. Please try again."
					/>
				)}
			</form>

			{showSocialLinks && <SocialLinks links={socialLinks} />}
		</motion.div>
	);
}
