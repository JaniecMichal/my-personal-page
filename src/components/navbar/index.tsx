"use client";
import { ActiveNavbarLink } from "../../design-system/active-navbar-link";
import type React from "react";

import {
	FaHome,
	FaLaptop,
	FaTools,
	FaUserTie,
	FaEnvelope,
	FaBriefcase,
	FaUser,
} from "react-icons/fa";
import type { Route } from "next";
import { IconContext } from "react-icons";

type NavLink = {
	href: Route;
	title: string;
	icon?: React.ReactNode;
	ariaLabel: string;
};

const NAV_LINKS: NavLink[] = [
	{
		href: "/",
		title: "Home",
		icon: <FaHome className="text-current" />,
		ariaLabel: "home",
	},
	{
		href: "/about",
		title: "About",
		icon: <FaUser className="text-current" />,
		ariaLabel: "skills",
	},
	{
		href: "/skills",
		title: "Skills",
		icon: <FaTools className="text-current" />,
		ariaLabel: "skills",
	},
	{
		href: "/experience",
		title: "Experience",
		icon: <FaUserTie className="text-current" />,
		ariaLabel: "expierience",
	},
	{
		href: "/projects",
		title: "Projects",
		icon: <FaLaptop className="text-current" />,
		ariaLabel: "projects",
	},
	{
		href: "/for-business",
		title: "For Business",
		icon: <FaBriefcase className="text-current" />,
		ariaLabel: "for-business",
	},
	{
		href: "/contact",
		title: "Contact",
		icon: <FaEnvelope className="text-current" />,
		ariaLabel: "contact",
	},
];

export const Navbar = () => {
	return (
		<IconContext.Provider value={{ size: "24px" }}>
			<nav className="mb-4 rounded-lg bg-gray-300/80 px-3 py-2 backdrop-blur-md">
				<ul className="flex space-x-4">
					{NAV_LINKS.map(({ title, href, icon, ariaLabel }) => (
						<ActiveNavbarLink
							key={href}
							href={href}
							title={title}
							icon={icon}
							ariaLabel={ariaLabel}
							exact={false}
						/>
					))}
				</ul>
			</nav>
		</IconContext.Provider>
	);
};
