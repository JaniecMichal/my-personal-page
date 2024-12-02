import { MainHeading, SubHeading } from "@/components/headings";
import { Highlight } from "@/components/highlight";
import { SkillsList } from "@/components/skills-list";

const skills = [
	{
		name: "HTML",
		level: "Advanced",
		description: "Solid understanding of semantic HTML, accessibility, and best practices.",
	},
	{
		name: "CSS",
		level: "Advanced",
		description:
			"Proficient in modern CSS techniques, including Flexbox, Grid, and responsive design. Experience with CSS-in-JS libraries and CSS Modules.",
	},
	{
		name: "JavaScript",
		level: "Advanced",
		description:
			"Strong JavaScript fundamentals, including ES6+ features, DOM manipulation, and asynchronous programming.",
	},
	{
		name: "React",
		level: "Advanced",
		description:
			"Extensive experience building complex user interfaces with React, including state management, hooks, and component lifecycle.",
	},
	{
		name: "Next.js",
		level: "Intermediate",
		description:
			"Experience building server-side rendered applications with Next.js, including routing, data fetching, and API routes.",
	},
	{
		name: "Tailwind CSS",
		level: "Advanced",
		description:
			"Proficient in using Tailwind CSS to create responsive and visually appealing user interfaces.",
	},
	// ... dodaj więcej umiejętności
];

export default async function Skills() {
	return (
		<section className="py-12">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<MainHeading text="My Skills" />
				<SubHeading
					text={
						<>
							Crafted with{" "}
							<Highlight className="text-blue-600" hideLine>
								Passion
							</Highlight>
						</>
					}
				/>
			</div>

			<SkillsList listTitle="Technical skills" skills={skills} />
		</section>
	);
}
