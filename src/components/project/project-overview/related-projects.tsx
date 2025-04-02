import Link from "next/link"
import Image from "next/image"
import { getProjectsList, ProjectType } from "@/api/projects"

type Props = {
  currentProject: ProjectType
}

export default async function RelatedProjects({ currentProject }: Props) {
  const allProjects = await getProjectsList()

  const relatedProjects = allProjects
    .filter((p) => p.id !== currentProject.id)
    .filter((p) =>
      p.technologies.some((tech) => currentProject.technologies.includes(tech))
    )
    .slice(0, 3)

  if (relatedProjects.length === 0) return null

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {relatedProjects.map((relatedProject) => (
          <div
            key={relatedProject.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg group"
          >
            <Link
              href={`/projects/${relatedProject.slug}`}
              className="block relative h-48 overflow-hidden bg-gray-200"
            >
              <Image
                src={relatedProject.image[0]?.url || "/placeholder.svg?height=400&width=600"}
                alt={relatedProject.name || "Project image"}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white font-medium p-4">View Case Study</span>
              </div>
            </Link>

            <div className="p-6">
              <Link href={`/projects/${relatedProject.slug}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {relatedProject.name}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {relatedProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {relatedProject.technologies.slice(0, 3).map(
                  (tech, i) =>
                    tech && (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
