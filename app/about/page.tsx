import { Description } from "@/design-system/description";
import { Details } from "@/components/details";
import { PageLayout } from "@/design-system/page-layout";

export default async function About() {
	return (
		<PageLayout
			mainHeaderNotHighlitedPart="Something about"
			mainHeaderHighlitedPart="me"
			subHeaderNotHighlitedPart="Frontend Developer with ReactJS and NextJS, ready for big"
			subHeaderHighlitedPart="challanges"
		>
			<Description>
				👨‍🎓💻🖥I'm an experienced and ambitious frontend developer with over 3.5 years of experience
				in the industry. I thrive on writing clean, efficient code and have a proven track record of
				leading development teams to success.
			</Description>
			<Description>
				I'm passionate about delivering high-quality products and enthusiastically embrace new
				challenges to continually expand my skill set. I love learning new things and being in the
				midst of the creative storm where amazing interfaces and applications emerge – those that
				simplify and enhance everyday life. I'm currently seeking a stimulating environment where I
				can utilize my skills and grow as a developer. I'm a loyal and reliable employee who takes
				my responsibilities seriously.
			</Description>
			<Description>
				I enjoy staying active and participating in sports, which helps me develop the character and
				discipline that are also essential in my work as a programmer. I recently completed a half
				marathon and am constantly setting new goals to strive for.
			</Description>

			<Details />
		</PageLayout>
	);
}
