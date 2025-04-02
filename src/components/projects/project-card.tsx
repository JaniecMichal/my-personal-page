"use client"

import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { ProjectType } from "@/src/api/projects"

type Props = {
  project: ProjectType
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
      <Link
        href={`/projects/${project.slug}`}
        className="block relative h-48 overflow-hidden bg-gray-200"
      >
        <Image
          src={project.image[0]?.url || "/placeholder.svg?height=400&width=600"}
          alt={project.name || "Project image"}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <span className="text-white font-medium p-4">View Case Study</span>
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/projects/${project.slug}`} className="block">
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {project.name}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map(
            (tech, i) =>
              tech && (
                <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {tech}
                </span>
              )
          )}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
          <div className="flex gap-2">
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                aria-label="View code repository"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                aria-label="View live project"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
