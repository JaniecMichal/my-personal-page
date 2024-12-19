"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projectCoverPhoto from "@/assets/project_placeholder_cover_photo.jpeg";
import { PageSectionLayout } from "@/design-system/page-section-layout";
import type { ProjectListItemFragment } from "@/gql/graphql";

import { PrimaryButton, SecondaryButton } from "../../design-system/buttons";

import { ProjectModal } from "./modal";

export const Projects = ({ projects }: {projects: ProjectListItemFragment[]}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<ProjectListItemFragment | null>(null);

	const handleOpenModal = (project: ProjectListItemFragment) => {
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
				{projects.map((project) => (
					<motion.li
						key={project.id}
						className="group relative h-[600px] overflow-hidden rounded-lg bg-gray-100 p-6 hover:cursor-pointer hover:bg-gray-50"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
						onClick={() => handleOpenModal(project)}
					>
						<div className="mb-4 h-[300px] w-full overflow-hidden">
							{!!project.image && <Image
								src={project.image[0]?.url || projectCoverPhoto}
								alt={project.image[0]?.fileName || "project-image"}
								width={420}
								height={200}
								className="mb-4 rounded-lg"
							/>}
						</div>
						<h4 className="mb-2 text-xl font-semibold text-gray-800">{project.name}</h4>
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
