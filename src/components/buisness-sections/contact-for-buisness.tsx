"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const ContactForBuisness = () => {
	return (
		<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
			<div className="container mx-auto px-4 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="mb-4 text-3xl font-bold">Ready to discuss your project?</h2>
					<p className="mx-auto mb-8 max-w-2xl text-blue-100">
						Let's collaborate to create a solution that meets your business needs and exceeds your
						expectations.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-lg transition-all hover:bg-blue-50"
					>
						Contact Me
					</Link>
				</motion.div>
			</div>
		</section>
	);
};
