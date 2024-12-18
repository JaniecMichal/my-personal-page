import { Description } from "@/components/description";
import { MainHeading, SubHeading } from "@/components/headings";
import { Highlight } from "@/components/highlight";
import { Projects } from "@/components/projects";

export default async function MyProjects() {
	return (
		<section className="mx-auto px-4 py-12 md:px-6 lg:px-24">
			<MainHeading
				text={
					<>
						My <Highlight>projects</Highlight>
					</>
				}
			/>
			<SubHeading
				text={
					<>
						projects that allow me
						<Highlight className="mx-2 text-blue-600" hideLine>
							to grow
						</Highlight>
						as a developer
					</>
				}
			/>
			<Description>List of my projects</Description>
			<Projects />
		</section>
	);
}
