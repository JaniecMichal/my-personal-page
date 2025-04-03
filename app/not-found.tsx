import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Page Not Found | 404 Error",
	description: "The page you are looking for could not be found. Navigate back to the homepage.",
	robots: {
		index: false,
		follow: true,
	},
};

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
			<div className="w-full max-w-md text-center">
				<h1 className="text-6xl font-bold text-blue-600">404</h1>
				<h2 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
				<p className="mt-4 text-lg text-gray-600">
					Sorry, the page you are looking for doesn't exist or has been moved.
				</p>
				<div className="mt-8">
					<Link
						href="/"
						className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-blue-700"
					>
						Return to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
}
