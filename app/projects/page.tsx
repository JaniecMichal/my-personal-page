import { Description } from "@/components/description";
import { MainHeading, SubHeading } from "@/components/headings";
import { Highlight } from "@/components/highlight";

export default async function MyProjects() {
	return (
		<section className="mx-auto px-4 py-12 md:px-6 lg:px-24">
			<MainHeading
				text={
					<>
						Something about <Highlight>my projects</Highlight>
					</>
				}
			/>
			<SubHeading
				text={
					<>
						ready for big{" "}
						<Highlight className="text-blue-600" hideLine>
							challanges
						</Highlight>
					</>
				}
			/>
			<Description>List of my projects</Description>
		</section>
	);
}
