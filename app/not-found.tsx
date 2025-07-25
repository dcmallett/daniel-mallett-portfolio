import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
				<h2 className="text-2xl font-bold text-gray-800 mb-4">
					Page Not Found
				</h2>
				<p className="text-gray-600 mb-6">
					Sorry, the page you&apos;re looking for doesn&apos;t exist.
				</p>
				<Link
					href="/"
					className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
				>
					Go Home
				</Link>
			</div>
		</div>
	);
}
