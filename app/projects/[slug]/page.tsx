import { getProjectBySlug } from "@/src/api/projects"
import ProjectDetailContent from "@/src/components/project/project-detail-content"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

export default async function ProjectDetailPage({ params }: Props) {
  const projectsBySlug = await getProjectBySlug(params.slug)
  const project = projectsBySlug.find((project) => project?.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailContent project={project} />
}
