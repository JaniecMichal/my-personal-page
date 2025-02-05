import { PageSectionLayout } from "@/design-system/page-section-layout";

const experiences = [
	{
		company: "jemWszkole.pl",
		period: "02.2025 - present",
		role: "React Developer",
		duties: [
			"collaborating with the team to prepare web applications for publication, ensuring that they meet all necessary requirements and are ready for launch",
			"identifying, troubleshooting, and fixing bugs in web applications to ensure optimal performance and user experience",
			"continuously improving the quality of the codebase by refactoring, optimizing, and reducing technical debt",
			"implementing new interfaces and functionalities to enhance the user experience and meet evolving business needs",
		],
	},
	{
		company: "Gainflow",
		period: "12.2024 - present",
		role: "co-founder & Software Developer",
		duties: [
			"implemented new features and functionalities based on user feedback and market trends",
			"optimized app performance",
			"collaborated with backend developers",
			"conducted market research and analyzed user needs",
			"brainstormed and conceptualized innovative functionalities to enhance user engagement",
			"prioritized features based on impact and feasibility",
			"contributed to the development of brand vision, mission, and values",
			"identified target audiences and their needs",
			"researched and analyzed the competitive landscape",
		],
	},
	{
		company: "HexOcean",
		period: "2021 - 2024",
		role: "Frontend Developer",
		duties: [
			"creating new components, with styles and unit tests",
			"creating email templates in HTML",
			"implementing new features and creating business logic",
			"conducting code reviews",
			"performing refactoring, from small improvements to general refactoring",
			"fixing issues reported by the QA team",
			"directly contacting clients, agreeing on business requirements, and providing technical feedback",
			"clarifying requirements for new features to maintain project consistency",
			"managing the development team and providing new features",
		],
	},
];

export const Experience = () => {
	return (
		<PageSectionLayout sectionTitle="My Work History">
			<ul className="relative border-l border-gray-300">
				{experiences.map((experience) => (
					<li key={experience.company} className="mb-8 ml-8">
						<div className="absolute -left-2 top-4 h-4 w-4 rounded-full bg-blue-500"></div>
						<h4 className="mb-2 text-xl font-semibold text-gray-800">
							{experience.role} at {experience.company}
						</h4>
						<p className="mb-2 text-gray-600">{experience.period}</p>
						{experience.duties.map((duty) => (
							<p className="text-gray-600">- {duty}</p>
						))}
					</li>
				))}
			</ul>
		</PageSectionLayout>
	);
};
