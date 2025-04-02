"use client"
import { ProjectType } from "@/src/api/projects"
import ProjectChallenges from "./project-challanges"
import ProjectSolutions from "./project-solutions"


export default function ProjectOverview({ project }: { project: ProjectType }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Details</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
          <p className="text-gray-700 mb-6">
            This case study explores the development process, challenges, and solutions implemented in the{" "}
            {project.name} project. The project demonstrates my ability to{" "}
            {project.project_status === "Completed" ? "deliver" : "work on"} complex solutions using{" "}
            {project.technologies.slice(0, 3).join(", ")} and other modern technologies.
          </p>

          <ProjectChallenges />
        </div>

        <div>
          <ProjectSolutions />
        </div>
      </div>
    </>
  )
}
