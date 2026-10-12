"use client";

import type { ComponentProps } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

/** Marks the current section with aria-current and an accent underline. */
export function NavLink({ href, className, ...props }: ComponentProps<typeof Link> & { href: string }) {
	const pathname = usePathname();
	const active = pathname === href || pathname.startsWith(`${href}/`);

	return (
		<Link
			href={href}
			aria-current={active ? "page" : undefined}
			className={cn(
				"text-ink no-underline hover:text-accent",
				active && "shadow-[inset_0_-3px_0_var(--accent)]",
				className,
			)}
			{...props}
		/>
	);
}
