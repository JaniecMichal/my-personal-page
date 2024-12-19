import { Description } from "@/design-system/description";
import { MainHeading, SubHeading } from "@/design-system/headings";
import { Highlight } from "@/design-system/highlight";

type PageLayoutProps = {
	mainHeaderNotHighlitedPart: string;
	mainHeaderHighlitedPart: string;
	subHeaderNotHighlitedPart: string;
	subHeaderHighlitedPart: string;
	children: React.ReactNode;
};

export const PageLayout = ({
	mainHeaderNotHighlitedPart,
	mainHeaderHighlitedPart,
	subHeaderNotHighlitedPart,
	subHeaderHighlitedPart,
	children,
}: PageLayoutProps) => {
	return (
		<section className="mx-auto px-4 md:px-6 lg:px-24">
			<MainHeading
				text={
					<>
						{mainHeaderNotHighlitedPart} <Highlight>{mainHeaderHighlitedPart}</Highlight>
					</>
				}
			/>
			<SubHeading
				text={
					<>
						{subHeaderNotHighlitedPart}
						<Highlight className="mx-2 text-blue-600" hideLine>
							{subHeaderHighlitedPart}
						</Highlight>
					</>
				}
			/>
			{children}
		</section>
	);
};
