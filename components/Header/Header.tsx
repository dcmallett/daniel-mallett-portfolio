import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="p-4 shadow-md bg-blue-600 text-white">
			<nav className="container mx-auto flex justify-between items-center">
				<h1 className="text-xl font-bold">Daniel Mallett</h1>
				<div className="space-x-4">
					<Link href="/" className="hover:underline">
						Home
					</Link>
					<Link href="/projects" className="hover:underline">
						Projects
					</Link>
					<Link href="/blogs" className="hover:underline">
						Blogs
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
