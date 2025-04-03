"use client";
import { motion } from "framer-motion";
import { WORKFLOW_STEPS } from "./const";

export const BuisnessWorkflow = () => {
	return (
		<section className="bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-8 text-center"
				>
					<h2 className="text-3xl font-bold text-gray-900">My Workflow for Business Clients</h2>
					<div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
					<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
						A structured approach to ensure successful project delivery
					</p>
				</motion.div>

				<div className="mx-auto max-w-5xl">
					<div className="relative">
						<div className="absolute bottom-0 left-6 top-0 w-1 transform bg-gradient-to-b from-blue-500 to-purple-600 md:left-1/2 md:-translate-x-1/2"></div>

						{WORKFLOW_STEPS.map((step, index) => (
							<motion.div
								key={step.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className={`relative mb-6 flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
							>
								<div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-blue-500 bg-white text-lg font-bold text-blue-600 md:left-1/2">
									{step.id}
								</div>

								<div
									className={`ml-16 md:ml-0 md:w-[calc(50%-20px)] ${
										index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
									}`}
								>
									<div className="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
										<div className="mb-2 flex items-center text-blue-600">
											{step.icon}
											<h3 className="ml-3 text-lg font-semibold text-gray-800">{step.title}</h3>
										</div>
										<p className="text-sm text-gray-600">{step.description}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
