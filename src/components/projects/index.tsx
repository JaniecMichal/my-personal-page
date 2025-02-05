"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projectCoverPhoto from "@/assets/project_placeholder_cover_photo.jpeg";
import { PageSectionLayout } from "@/design-system/page-section-layout";
import type { ProjectListItemFragment } from "@/gql/graphql";

import { PrimaryButton, SecondaryButton } from "../../design-system/buttons";

import { ProjectModal } from "./modal";
import { ProjectListItem } from "./project-list-item";

export const Projects = ({ projects }: { projects: ProjectListItemFragment[] }) => {
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
					<ProjectListItem
						key={project.id}
						project={project}
						onProjectClick={() => handleOpenModal(project)}
					/>
				))}
			</ul>

			<ProjectModal project={selectedProject!} isOpen={isModalOpen} onClose={handleCloseModal} />
		</PageSectionLayout>
	);
};
