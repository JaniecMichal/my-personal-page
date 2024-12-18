import { Description } from "@/components/description";
import { Experience } from "@/components/experience";
import { MainHeading, SubHeading } from "@/components/headings";
import { Highlight } from "@/components/highlight";

export default async function MyExp() {
	return (
		<section className="mx-auto px-4 py-12 md:px-6 lg:px-24">
			<MainHeading
				text={
					<>
						My <Highlight>experience</Highlight>
					</>
				}
			/>
			<SubHeading
				text={
					<>
						<Highlight className="mx-2 text-blue-600" hideLine>
							proves
						</Highlight>
						my value
					</>
				}
			/>
			<Experience />
		</section>
	);
}
