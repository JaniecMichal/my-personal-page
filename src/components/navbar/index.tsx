import { ActiveLink } from "@/components/active-link";
import { Route } from "next";

type NavLink = {
	href: Route;
	title: string;
};

const NAV_LINKS: NavLink[] = [
	{
		href: "/",
		title: "Home",
	},
	{
		href: "/skills",
		title: "Skills",
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
		<nav className="mb-4 md:mb-0">
			<ul className="flex space-x-4">
				{NAV_LINKS.map((link) => (
					<ActiveLink key={link.href} href={link.href} title={link.title} exact={false} />
				))}
			</ul>
		</nav>
	);
};
