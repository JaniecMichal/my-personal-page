"use client";
import { motion } from "framer-motion";
import { SOFT_SKILLS } from "./const";

export const SoftSkills = () => {
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
					<h2 className="text-3xl font-bold text-gray-900">Key Qualities</h2>
					<div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
				</motion.div>

				<div className="mx-auto max-w-4xl">
					<div className="grid gap-4 md:grid-cols-3">
						{SOFT_SKILLS.map((skill, index) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								whileHover={{ y: -5 }}
								className="rounded-lg bg-white p-6 text-center shadow-sm"
							>
								<h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
