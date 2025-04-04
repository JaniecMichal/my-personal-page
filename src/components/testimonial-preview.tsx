"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaArrowRight, FaLinkedin } from "react-icons/fa";
import { TESTIMONIALS } from "./const";

export const TestimonialPreview = () => {
	const [current, setCurrent] = useState(0);
	const total = TESTIMONIALS.length;

	const next = () => setCurrent((prev) => (prev + 1) % total);
	const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

	const { name, title, text, profileUrl } = TESTIMONIALS[current]!;

	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl font-bold text-gray-900">What People Say</h2>
					<div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="mx-auto max-w-4xl"
				>
					<div className="relative flex min-h-[320px] flex-col justify-center rounded-lg bg-white p-8 shadow-xl">
						<div className="absolute -left-3 -top-3 text-blue-500 opacity-20">
							<FaQuoteLeft size={48} />
						</div>

						<div className="relative z-10">
							<p className="mb-6 line-clamp-6 text-base italic text-gray-700">{text}</p>

							<div>
								<a
									className="flex items-center gap-2 text-gray-900 hover:text-blue-700"
									href={profileUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
										<FaLinkedin size={32} />
									</div>
									<div>
										<h4 className="font-medium">{name}</h4>
										<p className="text-sm">{title}</p>
									</div>
								</a>
							</div>
						</div>
					</div>

					<div className="mt-6 flex justify-center space-x-4">
						<button
							onClick={prev}
							className="rounded-lg bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
						>
							Previous
						</button>
						<button
							onClick={next}
							className="rounded-lg bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
						>
							Next
						</button>
					</div>

					<div className="mt-8 text-center">
						<a
							href="https://www.linkedin.com/in/janiecmichal/details/recommendations/?detailScreenTabIndex=0"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
						>
							Read more testimonials
							<FaArrowRight className="ml-2 h-4 w-4" />
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
