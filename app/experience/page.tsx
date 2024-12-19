import { Description } from "@/design-system/description";
import { Experience } from "@/components/experience";
import { MainHeading, SubHeading } from "@/design-system/headings";
import { Highlight } from "@/design-system/highlight";

export default async function MyExp() {
	return (
		<section className="mx-auto px-4 md:px-6 lg:px-24">
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
