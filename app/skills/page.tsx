import { Description } from "@/components/description";
import { MainHeading, SubHeading } from "@/components/headings";
import { Highlight } from "@/components/highlight";
import { Skills } from "@/components/skills";
import { SoftSkills } from "@/components/soft-skills";

export default async function MySkills() {
	return (
		<section className="mx-auto px-4 py-12 md:px-6 lg:px-8">
			<MainHeading
				text={
					<>
						My <Highlight>Skills</Highlight>
					</>
				}
			/>
			<Description>
				Here's a list of the skills I've acquired throughout my professional career and through
				dedicated self-improvement outside of work. I'm committed to continuous learning and
				expanding my knowledge to stay up-to-date with the latest technologies. I believe that every
				new technology, when skillfully applied, can bring significant benefits, which is why I
				highly value the tools and opportunities that AI provides today.
			</Description>

			<Skills />

			<SoftSkills />
		</section>
	);
}
