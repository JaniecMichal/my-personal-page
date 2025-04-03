"use client";
import { motion } from "framer-motion";
import { BUSINESS_SERVICES } from "./const";

export const ServiceIntroduction = () => {
	return (
		<>
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mb-12 text-center"
					>
						<h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
							Solutions for <span className="text-gradient">Business</span>
						</h1>
						<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
							Professional development services tailored to your{" "}
							<span className="font-medium text-blue-600">business needs</span>
						</p>
						<div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mx-auto mb-16 max-w-3xl"
					>
						<p className="text-center text-lg text-gray-700">
							I provide comprehensive development solutions for businesses of all sizes. Whether you
							need a new web application, mobile app, or technical expertise for your team, I
							deliver high-quality results that align with your business goals.
						</p>
					</motion.div>
				</div>
			</section>

			<section className="bg-white py-16">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="mb-12 text-center"
					>
						<h2 className="text-3xl font-bold text-gray-900">Services for Business</h2>
						<div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
						<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
							Specialized solutions to help your business grow and succeed
						</p>
					</motion.div>

					<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
						{BUSINESS_SERVICES.map((service, index) => (
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
				</div>
			</section>
		</>
	);
};
