import {
	FaClipboardCheck,
	FaPencilRuler,
	FaCode,
	FaCheckCircle,
	FaRocket,
	FaHeadset,
	FaLaptopCode,
	FaUsers,
	FaUserCog,
	FaMobileAlt,
} from "react-icons/fa";

export const WORKFLOW_STEPS = [
	{
		id: 1,
		title: "Needs Assessment & Requirement Gathering",
		description:
			"I begin by understanding your business goals and technical needs to define the right solution—whether it's a website, web application, or mobile app.",
		icon: <FaClipboardCheck className="h-6 w-6" />,
	},
	{
		id: 2,
		title: "Design Proposal & UX/UI Planning",
		description:
			"I prepare a tailored design concept aligned with your objectives and industry standards, focusing on usability and aesthetics.",
		icon: <FaPencilRuler className="h-6 w-6" />,
	},
	{
		id: 3,
		title: "Iterative Development with Full Transparency",
		description:
			"The development process is fully transparent, with the ability to preview and provide feedback at every stage.",
		icon: <FaCode className="h-6 w-6" />,
	},
	{
		id: 4,
		title: "Testing & Optimization",
		description:
			"I conduct thorough testing to ensure performance, stability, and scalability—refining the product before launch.",
		icon: <FaCheckCircle className="h-6 w-6" />,
	},
	{
		id: 5,
		title: "Product Release",
		description:
			"The final product is delivered, deployed, and ready to bring value to your business.",
		icon: <FaRocket className="h-6 w-6" />,
	},
	{
		id: 6,
		title: "Post-Launch Technical Support",
		description:
			"I offer continued support to ensure long-term success, updates, and smooth operation beyond the development phase.",
		icon: <FaHeadset className="h-6 w-6" />,
	},
];

export const BUSINESS_SERVICES = [
	{
		title: "Web Application Development",
		description:
			"Custom web applications tailored to your business needs, from internal tools to customer-facing platforms.",
		icon: <FaLaptopCode className="h-12 w-12 text-blue-500" />,
	},
	{
		title: "Team Collaboration",
		description:
			"Seamless integration with your existing development team, providing frontend expertise and support for complex projects.",
		icon: <FaUsers className="h-12 w-12 text-purple-500" />,
	},
	{
		title: "Consulting & Strategy",
		description:
			"Technical consulting on frontend architecture, performance optimization, and technology selection for your projects.",
		icon: <FaUserCog className="h-12 w-12 text-blue-500" />,
	},
	{
		title: "Mobile App Development",
		description:
			"Cross-platform mobile applications that deliver native-like experiences while maintaining a single codebase for efficiency.",
		icon: <FaMobileAlt className="h-12 w-12 text-purple-500" />,
	},
];
