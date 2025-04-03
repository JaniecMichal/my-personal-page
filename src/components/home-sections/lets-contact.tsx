import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const LetsContact = () => {
	return (
		<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
			<div className="container mx-auto px-4 text-center">
				<h2 className="mb-4 text-3xl font-bold">Ready to work together?</h2>
				<p className="mx-auto mb-8 max-w-2xl text-blue-100">
					I'm currently available for freelance projects and full-time opportunities. Let's create
					something amazing together.
				</p>
				<Link
					href="/contact"
					className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-lg transition-all hover:bg-blue-50"
				>
					Contact Me
					<FaArrowRight className="ml-2 h-4 w-4" />
				</Link>
			</div>
		</section>
	);
};
