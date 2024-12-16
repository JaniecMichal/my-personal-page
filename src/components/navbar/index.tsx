import { ActiveNavbarLink } from "@/components/active-navbar-link";
import { HomeIcon, PencilRulerIcon } from "lucide-react";
import { Route } from "next";

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
		icon: <HomeIcon className="text-current" />,
		ariaLabel: "home",
	},
	{
		href: "/skills",
		title: "Skills",
		icon: <PencilRulerIcon />,
		ariaLabel: "skills",
	},
	/* {
		href: "/skills",
		title: "Skills",
	},
	{
		href: "/experience",
		title: "Experience",
	},
	{
		href: "/projects",
		title: "Projects",
	}, */
];

export const Navbar = () => {
	return (
		<nav className="mb-4 rounded-lg bg-gray-300/60 px-3 py-2">
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
	);
};
