"use client";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	// Log error for debugging (suppress unused variable warning)
	console.error("Global error:", error);
	return (
		<html>
			<body>
				<div className="min-h-screen flex items-center justify-center bg-gray-50">
					<div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
						<h2 className="text-2xl font-bold text-red-600 mb-4">
							Something went wrong!
						</h2>
						<p className="text-gray-600 mb-6">
							An unexpected error occurred. Please try again.
						</p>
						<button
							onClick={() => reset()}
							className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
						>
							Try again
						</button>
					</div>
				</div>
			</body>
		</html>
	);
}
