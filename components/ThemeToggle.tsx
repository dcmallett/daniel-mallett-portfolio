"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<motion.button
			onClick={toggleTheme}
			className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-300"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			<motion.div
				className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
				animate={{
					x: theme === "dark" ? 24 : 0,
				}}
				transition={{
					type: "spring",
					stiffness: 700,
					damping: 30,
				}}
			>
				{theme === "dark" ? (
					<Moon className="w-3 h-3 text-gray-800" />
				) : (
					<Sun className="w-3 h-3 text-yellow-500" />
				)}
			</motion.div>
		</motion.button>
	);
}
