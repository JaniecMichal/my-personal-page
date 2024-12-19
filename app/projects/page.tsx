import { Description } from "@/design-system/description";
import { Projects } from "@/components/projects";
import { PageLayout } from "@/design-system/page-layout";
import { getProjectsList } from "@/api/project";

export default async function MyProjects() {
	const projectsList = await getProjectsList();

	return (
		<PageLayout
			mainHeaderNotHighlitedPart="My"
			mainHeaderHighlitedPart="projects"
			subHeaderNotHighlitedPart="projects that allow me to grow as"
			subHeaderHighlitedPart="a professional developer"
		>
			<Description>
				Below is a list of my projects. These include projects I've built from the ground up, as
				well as those where I actively participated as a member of a development team. Through
				dedicated work on these projects, I've gained valuable knowledge and experience that I
				leverage in my daily work.
			</Description>

			<Projects projects={projectsList} />
		</PageLayout>
	);
}
