import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/api/projects";
import ProjectDetailContent from "@/components/project/project-detail-content";

type Params = Promise<{ slug: string }>;

export default async function ProjectDetailPage({ params }: { params: Params }) {
	const { slug } = await params;
	const projectsBySlug = await getProjectBySlug(slug);
	const project = projectsBySlug.find((project) => project?.slug === slug);

	if (!project) {
		notFound();
	}

	return <ProjectDetailContent project={project} />;
}
