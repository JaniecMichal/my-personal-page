"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
	FaBriefcase,
	FaCalendarAlt,
	FaMapMarkerAlt,
	FaChevronDown,
	FaChevronUp,
} from "react-icons/fa";
import { EXPERIENCES } from "./const";

export const ExpHistory = () => {
	const [expandedId, setExpandedId] = useState<string | null>(null);

	const toggleExpand = (id: string) => {
		setExpandedId(expandedId === id ? null : id);
	};

	return (
		<div className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.08),transparent)]" />

			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mb-12 text-center"
					>
						<h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
							My <span className="text-gradient">experience</span>
						</h1>
						<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
							Professional journey that proves my{" "}
							<span className="font-medium text-blue-600">value</span>
						</p>
						<div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
					</motion.div>

					<div className="relative mx-auto max-w-4xl">
						<div className="absolute bottom-0 left-0 top-0 w-1 transform bg-gradient-to-b from-blue-500 to-purple-600 md:left-1/2 md:-translate-x-1/2"></div>

						{EXPERIENCES.map((exp, index) => (
							<motion.div
								key={exp.id}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className={`relative mb-12 md:mb-24 ${
									index % 2 === 0
										? "md:ml-auto md:mr-0 md:pr-12 md:text-right"
										: "md:ml-0 md:mr-auto md:pl-12"
								} md:w-1/2`}
							>
								<motion.div
									whileHover={{ y: -5 }}
									className="ml-12 overflow-hidden rounded-lg bg-white shadow-md md:ml-0"
								>
									<div
										className={`cursor-pointer bg-gradient-to-r p-6 ${
											exp.color === "blue"
												? "from-blue-500 to-blue-600"
												: exp.color === "purple"
													? "from-purple-500 to-purple-600"
													: "from-indigo-500 to-indigo-600"
										} text-white`}
										onClick={() => toggleExpand(exp.id)}
									>
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
													<FaBriefcase />
												</div>
												<div className="text-left">
													<h3 className="text-xl font-bold">{exp.role}</h3>
													<h4 className="text-lg">{exp.company}</h4>
												</div>
											</div>
											<div>{expandedId === exp.id ? <FaChevronUp /> : <FaChevronDown />}</div>
										</div>
									</div>

									<motion.div
										initial={{ height: 0 }}
										animate={{ height: expandedId === exp.id ? "auto" : 0 }}
										transition={{ duration: 0.3 }}
										className="overflow-hidden"
									>
										<div className="p-6">
											<div className="mb-4 flex flex-wrap gap-4">
												<div className="flex items-center text-gray-600">
													<FaCalendarAlt className="mr-2" />
													<span>{exp.period}</span>
												</div>
												<div className="flex items-center text-gray-600">
													<FaMapMarkerAlt className="mr-2" />
													<span>{exp.location}</span>
												</div>
											</div>

											<article className="text-left">
												<h5 className="mb-2 font-semibold text-gray-800">Responsibilities:</h5>
												<ul className="mb-4 list-disc pl-5 text-gray-700">
													{exp.duties.map((duty, i) => (
														<li key={i} className="mb-1">
															{duty}
														</li>
													))}
												</ul>
											</article>

											<article className="text-left">
												<h5 className="mb-2 font-semibold text-gray-800">Technologies:</h5>
												<div className="flex flex-wrap justify-center gap-2">
													{exp.technologies.map((tech) => (
														<span
															key={tech}
															className={`rounded-full px-3 py-1 text-sm ${
																exp.color === "blue"
																	? "bg-blue-100 text-blue-700"
																	: exp.color === "purple"
																		? "bg-purple-100 text-purple-700"
																		: "bg-indigo-100 text-indigo-700"
															}`}
														>
															{tech}
														</span>
													))}
												</div>
											</article>
										</div>
									</motion.div>
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};
