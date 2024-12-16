"use client";
import clsx from "clsx";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveNavbarLinkProps = {
	href: Route;
	title: string;
	icon: React.ReactNode;
	ariaLabel: string;
	exact?: boolean;
};

export const ActiveNavbarLink = ({
	href,
	title,
	icon,
	ariaLabel,
	exact = true,
}: ActiveNavbarLinkProps) => {
	const pathname = usePathname();
	const isActive =
		exact || (!exact && href === "/") ? pathname === href : pathname.startsWith(href);
	const activeColor = isActive ? "text-blue-600" : "text-gray-700";

	return (
		<div className="group relative">
			<Link
				href={href}
				className={clsx(
					"inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-colors duration-200",
					`${activeColor} hover:text-blue-600`,
				)}
				aria-label={ariaLabel}
				aria-current={isActive ? "page" : undefined}
			>
				{icon}
			</Link>
			<div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
				<div className="rounded-lg bg-gray-800 px-2 py-1 text-sm text-white shadow-lg">{title}</div>
			</div>
		</div>
	);
};
