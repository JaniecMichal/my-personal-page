"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { SERVICES } from "./const";

export const Services = () => {
	return (
		<section className="bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl font-bold text-gray-900">My Services</h2>
					<div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
					<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
						Comprehensive solutions tailored to your specific needs
					</p>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{SERVICES.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
						>
							<div className="mb-4 flex justify-center">{service.icon}</div>
							<h3 className="mb-3 text-center text-xl font-semibold text-gray-800">
								{service.title}
							</h3>
							<p className="text-center text-gray-600">{service.description}</p>
						</motion.div>
					))}
				</div>
				<div className="mt-12 text-center">
					<Link
						href="/for-business"
						className="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-800"
					>
						Learn more about my business services
						<FaArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
};
