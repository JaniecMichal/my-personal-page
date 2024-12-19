import { PageSectionLayout } from "@/design-system/page-section-layout";

const experiences = [
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
