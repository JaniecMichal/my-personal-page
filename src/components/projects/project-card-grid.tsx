"use client";
import { motion } from "framer-motion";
import { ProjectType } from "@/api/projects";
import ProjectCard from "./project-card";

type Props = {
	projects: ProjectType[];
	clearFilters: () => void;
};

export default function ProjectCardGrid({ projects, clearFilters }: Props) {
	const sortedProjects = projects.sort((a, b) => {
		if (a.category === "commercial" && b.category !== "commercial") return -1;
		if (a.category !== "commercial" && b.category === "commercial") return 1;
		return 0;
	});

	if (sortedProjects.length === 0) {
		return (
			<div className="py-20 text-center">
				<h3 className="text-xl text-gray-600">No projects found matching your criteria</h3>
				<button
					onClick={clearFilters}
					className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
				>
					Clear Filters
				</button>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.4 }}
			className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3"
		>
			{sortedProjects.map((project, index) => (
				<motion.div
					key={project.id}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: index * 0.1 }}
					whileHover={{ y: -10 }}
				>
					<ProjectCard project={project} />
				</motion.div>
			))}
		</motion.div>
	);
}
