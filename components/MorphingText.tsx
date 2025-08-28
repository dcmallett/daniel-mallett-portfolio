"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MorphingTextProps {
	texts: string[];
	className?: string;
	duration?: number;
}

export default function MorphingText({
	texts,
	className = "",
	duration = 3,
}: MorphingTextProps) {
	const textRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (!textRef.current || texts.length === 0) return;

		const element = textRef.current;
		let currentIndex = 0;

		const animateText = () => {
			const currentText = texts[currentIndex];
			const nextIndex = (currentIndex + 1) % texts.length;
			const nextText = texts[nextIndex];

			// Split text into characters
			element.innerHTML = currentText
				.split("")
				.map(
					(char, i) =>
						`<span class="inline-block" style="animation-delay: ${i * 0.02}s">${
							char === " " ? "&nbsp;" : char
						}</span>`
				)
				.join("");

			const chars = element.querySelectorAll("span");

			// Animate out
			gsap.to(chars, {
				y: -20,
				opacity: 0,
				duration: 0.5,
				stagger: 0.02,
				ease: "power2.inOut",
				onComplete: () => {
					// Change text
					element.innerHTML = nextText
						.split("")
						.map(
							(char) =>
								`<span class="inline-block" style="transform: translateY(20px); opacity: 0;">${
									char === " " ? "&nbsp;" : char
								}</span>`
						)
						.join("");

					const newChars = element.querySelectorAll("span");

					// Animate in
					gsap.to(newChars, {
						y: 0,
						opacity: 1,
						duration: 0.5,
						stagger: 0.02,
						ease: "power2.inOut",
					});
				},
			});

			currentIndex = nextIndex;
		};

		// Initial setup
		element.textContent = texts[0];

		// Start animation loop
		const interval = setInterval(animateText, duration * 1000);

		return () => clearInterval(interval);
	}, [texts, duration]);

	return (
		<span ref={textRef} className={`inline-block ${className}`}>
			{texts[0]}
		</span>
	);
}
