"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import projectCoverPhoto from "@/assets/project_placeholder_cover_photo.jpeg"
import { ProjectListItemFragment } from "@/gql/graphql"

import { PrimaryButton, SecondaryButton } from "../../design-system/buttons"

type ProjectListItemProps = {
  project: ProjectListItemFragment
  onProjectClick: () => void
}

export const ProjectListItem = ({ project, onProjectClick }: ProjectListItemProps) => {
  return (
    <motion.li
      key={project.id}
      className="group relative h-[450px] overflow-hidden rounded-lg bg-gray-100 p-6 hover:cursor-pointer hover:bg-gray-50 md:h-[600px]"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={onProjectClick}
    >
      <div className="mb-4 flex h-[150px] w-full items-center overflow-hidden md:h-[300px]">
        {!!project.image && (
          <Image
            src={project.image[0]?.url || projectCoverPhoto}
            alt={project.image[0]?.fileName || "project-image"}
            width={420}
            height={300}
            className="mb-4 rounded-lg"
          />
        )}
      </div>
      <h4 className="mb-2 text-xl font-semibold text-gray-800">{project.name}</h4>
      <div className="flex flex-col">
        <p className="line-clamp-3 flex-grow overflow-hidden text-ellipsis text-sm text-gray-800">
          {project.description}
        </p>
        <div className="my-4 flex flex-wrap gap-2">
          {project.technologies
            .filter((tech) => tech !== "")
            .slice(0, 3)
            .map((tech, techIndex) => (
              <span key={techIndex} className="rounded-full bg-gray-300 px-2 py-1 text-xs text-gray-800">
                {tech}
              </span>
            ))}
          {project.technologies.filter((tech) => tech !== "").length > 3 && (
            <span className="rounded-full bg-gray-300 px-2 py-1 text-xs text-gray-800">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        <div className="flex gap-4 justify-self-end">
          {project.liveUrl && (
            <PrimaryButton
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              text="See Live"
              size="small"
            />
          )}
          {project.codeUrl && (
            <SecondaryButton
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              text="See Code"
              size="small"
            />
          )}
        </div>
      </div>
    </motion.li>
  )
}

