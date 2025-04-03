"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaLanguage, FaGraduationCap, FaRunning } from "react-icons/fa";

export const PersonalDetails = () => {
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
					<h2 className="text-3xl font-bold text-gray-900">Personal Details</h2>
					<div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="rounded-xl bg-white p-6 shadow-sm"
					>
						<div className="mb-4 flex items-center">
							<div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
								<FaMapMarkerAlt size={20} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900">Location</h3>
						</div>
						<p className="text-gray-700">Katowice, Poland</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="rounded-xl bg-white p-6 shadow-sm"
					>
						<div className="mb-4 flex items-center">
							<div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
								<FaLanguage size={20} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900">Languages</h3>
						</div>
						<ul className="text-gray-700">
							<li>Polish (Native)</li>
							<li>English (Intermediate)</li>
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="rounded-xl bg-white p-6 shadow-sm"
					>
						<div className="mb-4 flex items-center">
							<div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
								<FaGraduationCap size={20} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900">Education</h3>
						</div>
						<p className="text-gray-700">Power Engineering</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="rounded-xl bg-white p-6 shadow-sm"
					>
						<div className="mb-4 flex items-center">
							<div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
								<FaRunning size={20} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900">Hobbies</h3>
						</div>
						<p className="text-gray-700">Running, Sports, Technology</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
