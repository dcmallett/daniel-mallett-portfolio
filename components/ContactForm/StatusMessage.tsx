"use client";

import { motion } from "framer-motion";
import React from "react";

interface StatusMessageProps {
	status: "success" | "error";
	message: string;
	className?: string;
}

export default function StatusMessage({
	status,
	message,
	className = "",
}: StatusMessageProps) {
	const isSuccess = status === "success";

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			className={`p-3 border rounded-lg text-sm ${
				isSuccess
					? "bg-green-50 border-green-200 text-green-800"
					: "bg-red-50 border-red-200 text-red-800"
			} ${className}`}
		>
			{isSuccess ? "✅" : "❌"} {message}
		</motion.div>
	);
}
