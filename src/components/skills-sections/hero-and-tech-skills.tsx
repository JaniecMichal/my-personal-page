"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { SKILL_CATEGORIES } from "./const";

export const HeroAndTechSkills = () => {
	const [activeCategory, setActiveCategory] = useState("frontend");
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
							My <span className="text-gradient">skills</span>
						</h1>
						<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
							Skills that make me capable{" "}
							<span className="font-medium text-blue-600">of great things</span>
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
							Here's a list of the skills I've acquired throughout my professional career and
							through dedicated self-improvement outside of work. I'm committed to continuous
							learning and expanding my knowledge to stay up-to-date with the latest technologies.
						</p>
					</motion.div>
				</div>
			</section>

			<section className="bg-gradient-to-b from-white to-gray-50 py-16">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="mb-12 text-center"
					>
						<h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
						<div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
					</motion.div>

					<div className="mb-12 flex flex-wrap justify-center gap-2">
						{SKILL_CATEGORIES.map((category) => (
							<motion.button
								key={category.id}
								whileHover={{ y: -3 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setActiveCategory(category.id)}
								className={`flex items-center rounded-full px-4 py-2 transition-all ${
									activeCategory === category.id
										? `bg-gradient-to-r ${category.color} text-white shadow-md`
										: "bg-white text-gray-700 hover:bg-gray-100"
								}`}
							>
								<span className="mr-2">{category.icon}</span>
								{category.name}
							</motion.button>
						))}
					</div>

					<div className="mx-auto max-w-4xl">
						{SKILL_CATEGORIES.map((category) => (
							<motion.div
								key={category.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: activeCategory === category.id ? 1 : 0,
									y: activeCategory === category.id ? 0 : 20,
									display: activeCategory === category.id ? "block" : "none",
								}}
								transition={{ duration: 0.5 }}
							>
								<div className="grid gap-4 md:grid-cols-3">
									{category.skills.map((skill, index) => (
										<motion.div
											key={skill.name}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.3, delay: index * 0.1 }}
											className="rounded-lg bg-white p-4 shadow-sm"
										>
											<span className="font-medium text-gray-800">{skill.name}</span>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
