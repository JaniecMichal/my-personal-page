"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCalendarAlt } from "react-icons/fa"

import { ProjectType } from "@/api/projects"

export default function ProjectHeader({ project }: { project: ProjectType }) {
  return (
    <>
      <Link
        href="/projects"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Obrazek */}
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image[0]?.url || "/placeholder.svg?height=600&width=800"}
                alt={project.name || "Project image"}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Szczegóły */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.name}</h1>

            {project.project_status && (
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-blue-600 mr-2" />
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Status: {project.project_status}
                </span>
              </div>
            )}

            <p className="text-lg text-gray-700 mb-6">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(
                  (tech, i) =>
                    tech && (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {tech}
                      </span>
                    ),
                )}
              </div>
            </div>

            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
                >
                  <FaExternalLinkAlt className="mr-2" /> View Live
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors flex items-center"
                >
                  <FaGithub className="mr-2" /> View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
