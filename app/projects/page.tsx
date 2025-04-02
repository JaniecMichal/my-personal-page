import { getProjectsList } from "@/api/projects"
import ProjectFilters from "@/components/projects/project-filters"

export default async function ProjectListPage() {
  const projects = await getProjectsList()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.08),transparent)]" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my portfolio of <span className="text-blue-600 font-medium">innovative solutions</span> and creative work
            </p>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          <ProjectFilters allProjects={projects} />
        </div>
      </section>
    </div>
  )
}
