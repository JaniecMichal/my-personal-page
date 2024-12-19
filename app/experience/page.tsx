import { Experience } from "@/components/experience";
import { PageLayout } from "@/design-system/page-layout";

export default async function MyExp() {
	return (
		<PageLayout
			mainHeaderNotHighlitedPart="My"
			mainHeaderHighlitedPart="experience"
			subHeaderNotHighlitedPart="prove my"
			subHeaderHighlitedPart="value"
		>
			<Experience />
		</PageLayout>
	);
}
