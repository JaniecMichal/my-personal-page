// ActiveLink.js
"use client";
import clsx from "clsx";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
	href: Route;
	title: string;
	exact?: boolean;
};

export const ActiveLink = ({ href, title, exact = true }: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive =
		exact || (!exact && href === "/") ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx(
				"relative inline-flex items-center text-lg font-medium tracking-wide transition-colors duration-200",
				"text-gray-700 hover:text-blue-600",
				isActive && "text-blue-600 underline underline-offset-4",
			)}
			aria-label={title}
			aria-current={isActive ? "page" : undefined}
		>
			{title}
			{isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600"></span>}
		</Link>
	);
};
