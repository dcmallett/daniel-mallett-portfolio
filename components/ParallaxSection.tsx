"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxSectionProps {
	children: React.ReactNode;
	speed?: number;
	className?: string;
	direction?: "up" | "down";
}

export default function ParallaxSection({
	children,
	speed = 0.5,
	className = "",
	direction = "up",
}: ParallaxSectionProps) {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!sectionRef.current) return;

		const element = sectionRef.current;
		const multiplier = direction === "up" ? -1 : 1;

		gsap.fromTo(
			element,
			{
				yPercent: 0,
			},
			{
				yPercent: multiplier * speed * 100,
				ease: "none",
				scrollTrigger: {
					trigger: element,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [speed, direction]);

	return (
		<div ref={sectionRef} className={className}>
			{children}
		</div>
	);
}
