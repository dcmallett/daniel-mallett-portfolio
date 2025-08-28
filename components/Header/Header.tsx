import Link from "next/link";
import React from "react";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
	return (
		//Test PR
		<header className="p-4 shadow-md bg-blue-600 dark:bg-gray-800 text-white transition-colors duration-300">
			<nav className="container mx-auto flex justify-between items-center">
				<Link
					href="/"
					className="text-2xl font-bold hover:scale-105 transition-transform"
				>
					<h1>Daniel Mallett</h1>
				</Link>
				<div className="flex items-center space-x-6">
					<div className="space-x-4">
						<Link href="/projects" className="hover:underline micro-bounce">
							Projects
						</Link>
						<Link href="/blogs" className="hover:underline micro-bounce">
							Blogs
						</Link>
						<Link href="/contact" className="hover:underline micro-bounce">
							Contact
						</Link>
					</div>
					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
};

export default Header;
