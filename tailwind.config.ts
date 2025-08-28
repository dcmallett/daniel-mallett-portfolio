import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				float: "float 3s ease-in-out infinite",
				"micro-bounce": "micro-bounce 0.3s ease-in-out",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"micro-bounce": {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.05)" },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
