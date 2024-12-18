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
		<section className="bg-gray-200/20 py-12">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<header className="mb-8">
					<h3 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-3xl">
						My Work History
					</h3>
					<div className="mx-auto h-1 w-20 rounded-full bg-blue-500"></div>
				</header>

				<ul className="relative border-l border-gray-300">
					{experiences.map((experience, index) => (
						<li key={index} className="mb-8 ml-8">
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
			</div>
		</section>
	);
};
