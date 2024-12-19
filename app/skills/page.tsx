import { Description } from "@/design-system/description";
import { Skills } from "@/components/skills";
import { SoftSkills } from "@/components/soft-skills";
import { PageLayout } from "@/design-system/page-layout";

export default async function MySkills() {
	return (
		<PageLayout
			mainHeaderNotHighlitedPart="My"
			mainHeaderHighlitedPart="skills"
			subHeaderNotHighlitedPart="Skills that make me capable"
			subHeaderHighlitedPart="of great things"
		>
			<Description>
				Here's a list of the skills I've acquired throughout my professional career and through
				dedicated self-improvement outside of work. I'm committed to continuous learning and
				expanding my knowledge to stay up-to-date with the latest technologies. I believe that every
				new technology, when skillfully applied, can bring significant benefits, which is why I
				highly value the tools and opportunities that AI provides today.
			</Description>

			<Skills />

			<SoftSkills />
		</PageLayout>
	);
}
