"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FlipCardProps {
	frontContent: React.ReactNode;
	backContent: React.ReactNode;
	className?: string;
}

export default function FlipCard({
	frontContent,
	backContent,
	className = "",
}: FlipCardProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div className={`flip-card-container ${className}`}>
			<motion.div
				className="flip-card relative w-full h-full cursor-pointer"
				style={{ transformStyle: "preserve-3d" }}
				animate={{ rotateY: isFlipped ? 180 : 0 }}
				transition={{ duration: 0.6, ease: "easeInOut" }}
				onClick={() => setIsFlipped(!isFlipped)}
				whileHover={{ scale: 1.02 }}
			>
				{/* Front Face */}
				<motion.div
					className="flip-card-face flip-card-front absolute inset-0 w-full h-full backface-hidden"
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(0deg)",
					}}
				>
					{frontContent}
				</motion.div>

				{/* Back Face */}
				<motion.div
					className="flip-card-face flip-card-back absolute inset-0 w-full h-full backface-hidden"
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(180deg)",
					}}
				>
					{backContent}
				</motion.div>
			</motion.div>
		</div>
	);
}
