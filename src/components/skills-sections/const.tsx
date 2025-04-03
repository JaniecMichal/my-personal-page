import { FaCode, FaTools, FaPalette, FaServer, FaDatabase, FaLaptopCode } from "react-icons/fa";

export const SKILL_CATEGORIES = [
	{
		id: "frontend",
		name: "Frontend",
		icon: <FaCode />,
		color: "from-blue-500 to-blue-600",
		skills: [
			{ name: "React" },
			{ name: "Redux" },
			{ name: "React Native" },
			{ name: "Next.js" },
			{ name: "TypeScript" },
			{ name: "JavaScript" },
			{ name: "HTML5" },
			{ name: "CSS3" },
		],
	},
	{
		id: "styling",
		name: "Styling",
		icon: <FaPalette />,
		color: "from-purple-500 to-purple-600",
		skills: [
			{ name: "Tailwind CSS" },
			{ name: "Styled Components" },
			{ name: "Sass/SCSS" },
			{ name: "Material-UI" },
			{ name: "CSS Modules" },
			{ name: "Responsive Design" },
			{ name: "Chakra-UI" },
		],
	},
	{
		id: "state",
		name: "State Management",
		icon: <FaLaptopCode />,
		color: "from-indigo-500 to-indigo-600",
		skills: [
			{ name: "Redux" },
			{ name: "RTK Query" },
			{ name: "Context API" },
			{ name: "Zustand" },
		],
	},
	{
		id: "backend",
		name: "Backend & APIs",
		icon: <FaServer />,
		color: "from-green-500 to-green-600",
		skills: [{ name: "GraphQL" }, { name: "REST APIs" }, { name: "API Integration" }],
	},
	{
		id: "tools",
		name: "Tools & Workflow",
		icon: <FaTools />,
		color: "from-amber-500 to-amber-600",
		skills: [
			{ name: "Git" },
			{ name: "GitHub/GitLab" },
			{ name: "Storybook" },
			{ name: "Jest" },
			{ name: "Testing Library" },
			{ name: "npm/yarn/pnpm" },
		],
	},
	{
		id: "other",
		name: "Other Technologies",
		icon: <FaDatabase />,
		color: "from-rose-500 to-rose-600",
		skills: [
			{ name: "CMS" },
			{ name: "MSW" },
			{ name: "AI Integration" },
			{ name: "Responsive Design" },
			{ name: "Performance Optimization" },
		],
	},
];

export const SOFT_SKILLS = [
	{ name: "Communication" },
	{ name: "Teamwork" },
	{ name: "Proactivity" },
	{ name: "Goal-Oriented" },
	{ name: "Analytical Thinking" },
	{ name: "Fast Learning" },
	{ name: "Team Leadership" },
	{ name: "Relationship Building" },
	{ name: "Adaptability" },
];
