"use client";
import { FaGithub, FaLinkedin, FaStrava } from "react-icons/fa";
import { IconContext } from "react-icons";

const SOCIALS = [
	{
		href: "#",
		icon: <FaLinkedin />,
	},
	{
		href: "#",
		icon: <FaGithub />,
	},
	{
		href: "#",
		icon: <FaStrava />,
	},
];

export const Socials = () => {
	return (
		<IconContext.Provider value={{ size: "32px" }}>
			<section className="mt-16 flex space-x-4">
				{SOCIALS.map((social) => (
					<a className="text-gray-600 hover:text-blue-500" href={social.href}>
						{social.icon}
					</a>
				))}
			</section>
		</IconContext.Provider>
	);
};
