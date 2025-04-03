"use client";

import { motion } from "framer-motion";
import { FaUsers, FaUserCog, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import Link from "next/link";

const services = [
	{
		icon: <FaUsers className="h-12 w-12 text-blue-500" />,
		title: "Cross-Team Collaboration",
		description:
			"Working effectively with backend developers, designers, product managers, and business stakeholders to deliver cohesive solutions that meet all requirements.",
	},
	{
		icon: <FaUserCog className="h-12 w-12 text-purple-500" />,
		title: "Client-Focused Development",
		description:
			"Individual work with clients, adapting products to their specific needs and creating solutions that align perfectly with their brand identity and vision.",
	},
	{
		icon: <FaLaptopCode className="h-12 w-12 text-blue-500" />,
		title: "Web Development",
		description:
			"Creating responsive web applications, landing pages, and company websites with modern technologies that provide exceptional user experiences.",
	},
	{
		icon: <FaMobileAlt className="h-12 w-12 text-purple-500" />,
		title: "Mobile App Development",
		description:
			"Building cross-platform mobile applications that deliver native-like experiences while maintaining a single codebase for efficiency.",
	},
];

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
					{services.map((service, index) => (
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
						className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-blue-700"
					>
						Learn more about my business services
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="ml-2 h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};
