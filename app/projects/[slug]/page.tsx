import { notFound } from "next/navigation";
import { Metadata } from "next";

import { getProjectBySlug } from "@/api/projects";
import ProjectDetailContent from "@/components/project/project-detail-content";

export const revalidate = 3600;

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const { slug } = await params;
	const projectsBySlug = await getProjectBySlug(slug);
	const project = projectsBySlug.find((project) => project?.slug === slug);

	if (!project) {
		return {
			title: "Project Not Found",
			description: "The requested project could not be found.",
		};
	}

	return {
		title: `${project.name} | Project Case Study`,
		description: project.description || "Detailed case study of this frontend development project.",
		alternates: {
			canonical: `https://mjaniec.it/projects/${project.slug}`,
		},
		openGraph: {
			title: `${project.name} | Frontend Project by Michał Janiec`,
			description:
				project.description || "Detailed case study of this frontend development project.",
			images: project.image[0]?.url
				? [
						{
							url: project.image[0].url,
							width: 1200,
							height: 630,
							alt: project.name || "Project image",
						},
					]
				: undefined,
		},
	};
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
	const { slug } = await params;
	const projectsBySlug = await getProjectBySlug(slug);
	const project = projectsBySlug.find((project) => project?.slug === slug);

	if (!project) {
		notFound();
	}

	return <ProjectDetailContent project={project} />;
}
