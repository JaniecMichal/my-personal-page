import { Metadata } from "next";
import { getProjectsList } from "@/api/projects";
import ProjectFilters from "@/components/projects/project-filters";

export const revalidate = 3600;

export const metadata: Metadata = {
	title: "Projects Portfolio | Frontend Development Work",
	description:
		"Explore my portfolio of frontend development projects. View case studies of web applications built with React, Next.js, and modern technologies.",
	alternates: {
		canonical: "https://michaljaniec.com/projects",
	},
	openGraph: {
		title: "Frontend Development Projects | Michał Janiec",
		description:
			"Explore my portfolio of innovative web applications and frontend development projects.",
	},
};

export default async function ProjectListPage() {
	const projects = await getProjectsList();

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.08),transparent)]" />

			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
							My <span className="text-gradient">Projects</span>
						</h1>
						<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
							Explore my portfolio of{" "}
							<span className="font-medium text-blue-600">innovative solutions</span> and creative
							work
						</p>
						<div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
					</div>

					<ProjectFilters allProjects={projects} />
				</div>
			</section>
		</div>
	);
}
