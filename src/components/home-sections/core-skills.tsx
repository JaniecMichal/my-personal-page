'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { SkillBadge } from "../ui/skill-badge";

const CORE_SKILLS = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL"];

export const CoreSkills = () => {
	return (
		<section className="bg-gradient-to-b from-white to-gray-50 py-12">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl font-bold text-gray-900">Core Expertise</h2>
					<div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
					className="flex flex-wrap justify-center gap-3"
				>
					{CORE_SKILLS.map((skill, index) => (
						<SkillBadge key={skill} skill={skill} index={index} />
					))}
				</motion.div>

				<div className="mt-12 text-center">
					<Link
						href="/skills"
						className="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-800"
					>
						View all my skills
						<FaArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
};
