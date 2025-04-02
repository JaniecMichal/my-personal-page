import { notFound } from "next/navigation"

import { getProjectBySlug } from "@/api/projects"
import ProjectDetailContent from "@/components/project/project-detail-content"

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
