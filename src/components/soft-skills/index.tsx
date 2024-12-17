"use client";
import { motion } from "framer-motion";

const softSkills = [
	"Communication",
	"Teamwork",
	"Proactivity",
	"Goal-Oriented",
	"Analytical Thinking",
	"Fast Learning",
	"Team Leadership",
	"Relationship Building",
	"Adaptability to changing environments",
];

export const SoftSkills = () => {
	return (
		<section className="mt-8 bg-gray-200/20 py-12">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<header className="mb-8">
					<h3 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-3xl">
						Key Qualities
					</h3>
					<div className="mx-auto h-1 w-20 rounded-full bg-blue-500"></div>
				</header>

				<div className="relative mx-auto w-full max-w-4xl">
					<ul className="flex flex-wrap justify-center gap-8">
						{softSkills.map((skill, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="relative rounded-lg bg-gray-300 px-4 py-2 shadow-md"
							>
								<div className="absolute -left-4 -top-4 h-4 w-4 origin-bottom-right rotate-45 transform bg-gray-300"></div>
								{skill}
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
