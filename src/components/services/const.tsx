import { FaUsers, FaUserCog, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

export const SERVICES = [
	{
		icon: <FaUsers className="h-12 w-12 text-blue-500" />,
		title: "Cross-Team Collaboration",
		description:
			"Working effectively with backend developers, designers, product managers, and business stakeholders to deliver cohesive solutions that meet all requirements.",
	},
	{
		icon: <FaUserCog className="h-12 w-12 text-purple-500" />,
		title: "Client-Focused Development",
		description:
			"Individual work with clients, adapting products to their specific needs and creating solutions that align perfectly with their brand identity and vision.",
	},
	{
		icon: <FaLaptopCode className="h-12 w-12 text-blue-500" />,
		title: "Web Development",
		description:
			"Creating responsive web applications, landing pages, and company websites with modern technologies that provide exceptional user experiences.",
	},
	{
		icon: <FaMobileAlt className="h-12 w-12 text-purple-500" />,
		title: "Mobile App Development",
		description:
			"Building cross-platform mobile applications that deliver native-like experiences while maintaining a single codebase for efficiency.",
	},
];
