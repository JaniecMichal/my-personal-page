"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projectCoverPhoto from "@/assets/project_placeholder_cover_photo.jpeg";

import { PrimaryButton, SecondaryButton } from "../../design-system/buttons";

import { ProjectModal } from "./modal";
import type { Project } from "./types";
import { PageSectionLayout } from "@/design-system/page-section-layout";

const projects = [
	{
		title: "Bella Beauty",
		description:
			"A high-performance website for a dental and aesthetic medicine clinic with an e-commerce module, focused on capturing the Scandinavian market. Built with WordPress and optimized for maximum performance.",
		image: null,
		technologies: ["WordPress", "WooCommerce", "Performance Optimization"],
		liveUrl: "https://bellabeauty.com",
		codeUrl: null,
	},
	{
		title: "Gainflow",
		description:
			"A fitness tracking app with a social module, built with React Native, Expo, and Python. Currently in beta testing as a foundation for further development.",
		image: null,
		technologies: ["React Native", "Expo", "Python", "Firebase"],
		liveUrl: null,
		codeUrl: "https://github.com/gainflow",
	},
	{
		title: "Braintrust",
		description:
			"Braintrust is a user-controlled talent network, where the community owns and governs the platform. It connects skilled professionals with high-quality job opportunities from leading companies, ensuring fair compensation and transparent processes. Built with Python/Django and React.",
		image: null,
		technologies: ["Python", "Django", "React", "PostgreSQL"],
		liveUrl: "https://usebraintrust.com/",
		codeUrl: null,
	},
];

export const Projects = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	const handleOpenModal = (project: Project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};
	return (
		<PageSectionLayout sectionTitle="My Projects">
			<ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<motion.li
						key={index}
						className="group relative h-[600px] overflow-hidden rounded-lg bg-gray-100 p-6 hover:cursor-pointer hover:bg-gray-50"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
						onClick={() => handleOpenModal(project)}
					>
						<div className="mb-4 h-[300px] w-full overflow-hidden">
							<Image
								src={project.image || projectCoverPhoto}
								alt={project.title}
								width={420}
								height={200}
								className="mb-4 rounded-lg"
							/>
						</div>
						<h4 className="mb-2 text-xl font-semibold text-gray-800">{project.title}</h4>
						<div className="flex flex-col">
							<p className="line-clamp-3 flex-grow overflow-hidden text-ellipsis text-sm text-gray-800">
								{project.description}
							</p>
							<div className="my-4 flex flex-wrap gap-2">
								{project.technologies.map((tech, techIndex) => (
									<span
										key={techIndex}
										className="rounded-full bg-gray-300 px-2 py-1 text-xs text-gray-800"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-4 justify-self-end">
								{project.liveUrl && (
									<PrimaryButton
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										text="See Live"
									/>
								)}
								{project.codeUrl && (
									<SecondaryButton
										href={project.codeUrl}
										target="_blank"
										rel="noopener noreferrer"
										text="See Code"
									/>
								)}
							</div>
						</div>
					</motion.li>
				))}
			</ul>

			<ProjectModal project={selectedProject!} isOpen={isModalOpen} onClose={handleCloseModal} />
		</PageSectionLayout>
	);
};
