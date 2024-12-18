"use client";
import { FaGithub, FaLinkedin, FaStrava } from "react-icons/fa";
import { IconContext } from "react-icons";

const SOCIALS = [
	{
		href: "https://www.linkedin.com/in/janiecmichal/",
		icon: <FaLinkedin />,
	},
	{
		href: "https://github.com/JaniecMichal",
		icon: <FaGithub />,
	},
	{
		href: "https://www.strava.com/athletes/118375721",
		icon: <FaStrava />,
	},
];

export const Socials = () => {
	return (
		<IconContext.Provider value={{ size: "32px" }}>
			<section className="mt-4 flex space-x-4 lg:mt-10">
				{SOCIALS.map((social) => (
					<a className="text-gray-600 hover:text-blue-500" href={social.href}>
						{social.icon}
					</a>
				))}
			</section>
		</IconContext.Provider>
	);
};
