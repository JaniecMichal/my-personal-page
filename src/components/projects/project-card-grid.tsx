"use client"
import { motion } from "framer-motion"
import { ProjectType } from "@/api/projects"
import ProjectCard from "./project-card"

type Props = {
  projects: ProjectType[]
  clearFilters: () => void
}

export default function ProjectCardGrid({ projects, clearFilters }: Props) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl text-gray-600">No projects found matching your criteria</h3>
        <button
          onClick={clearFilters}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Clear Filters
        </button>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
    >
      {projects.map((project, index) => (
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
  )
}
