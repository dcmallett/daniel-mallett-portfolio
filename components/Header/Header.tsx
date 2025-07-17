import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		//Test PR
		<header className="p-4 shadow-md bg-blue-600 text-white">
			<nav className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					<h1>Daniel Mallett</h1>
				</Link>
				<div className="space-x-4">
					<Link href="/projects" className="hover:underline">
						Projects
					</Link>
					<Link href="/blogs" className="hover:underline">
						Blogs
					</Link>
					<Link href="/contact" className="hover:underline">
						Contact
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
