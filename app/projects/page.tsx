import { Description } from "@/components/description";
import { MainHeading, SubHeading } from "@/components/headings";
import { Highlight } from "@/components/highlight";
import { Projects } from "@/components/projects";

export default async function MyProjects() {
	return (
		<section className="mx-auto px-4 md:px-6 lg:px-24">
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
			<Description>
				Below is a list of my projects. These include projects I've built from the ground up, as
				well as those where I actively participated as a member of a development team. Through
				dedicated work on these projects, I've gained valuable knowledge and experience that I
				leverage in my daily work.
			</Description>

			<Projects />
		</section>
	);
}
