"use client"
import { useEffect, useState } from "react"
import { FaSearch, FaTimes, FaFilter } from "react-icons/fa"
import { ProjectType } from "@/src/api/projects"
import { ProjectCardSkeleton } from "./project-skeleton"
import ProjectCardGrid from "./project-card-grid"

type Props = {
  allProjects: ProjectType[]
}

export default function ProjectFilters({ allProjects }: Props) {
  const [projects, setProjects] = useState(allProjects)
  const [filteredProjects, setFilteredProjects] = useState(allProjects)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const allTechnologies = Array.from(new Set(allProjects.flatMap(p => p.technologies.filter(Boolean)))).sort()

  useEffect(() => {
    let result = [...projects]

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (project) =>
          project.name?.toLowerCase().includes(term) ||
          project.description?.toLowerCase().includes(term)
      )
    }

    if (selectedTech) {
      result = result.filter((project) =>
        project.technologies.some((tech) => tech.toLowerCase() === selectedTech.toLowerCase())
      )
    }

    setFilteredProjects(result)
  }, [searchTerm, selectedTech, projects])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedTech(null)
  }

  return (
    <>
      <div className="max-w-5xl mx-auto mb-12">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="w-full md:w-64">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaFilter className="text-gray-400" />
                </div>
                <select
                  value={selectedTech || ""}
                  onChange={(e) => setSelectedTech(e.target.value || null)}
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">All Technologies</option>
                  {allTechnologies.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {(searchTerm || selectedTech) && (
              <button
                onClick={clearFilters}
                className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                <FaTimes className="mr-2" />
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {[...Array(6)].map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <ProjectCardGrid projects={filteredProjects} clearFilters={clearFilters} />
      )}
    </>
  )
}
