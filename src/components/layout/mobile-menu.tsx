"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "./nav-items";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";
import { ButtonLink } from "@/components/ui/button-link";
import { usePathname } from "@/i18n/navigation";

export function MobileMenu() {
	const t = useTranslations("common");
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const toggleRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const wasOpen = useRef(false);

	useEffect(() => setOpen(false), [pathname]);

	useEffect(() => {
		// While open, the page behind is inert, so Tab stays in the header and the menu.
		const background = document.querySelectorAll<HTMLElement>("main, footer");
		background.forEach((el) => (el.inert = open));
		document.body.style.overflow = open ? "hidden" : "";

		if (open) menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
		else if (wasOpen.current) toggleRef.current?.focus();
		wasOpen.current = open;

		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("keydown", onKey);
			background.forEach((el) => (el.inert = false));
		};
	}, [open]);

	return (
		<div className="lg:hidden">
			<button
				ref={toggleRef}
				type="button"
				aria-expanded={open}
				aria-controls="mobile-menu"
				aria-label={open ? t("menu.close") : t("menu.open")}
				onClick={() => setOpen((o) => !o)}
				className="flex size-11 flex-col items-center justify-center gap-1.5 bg-ink"
			>
				<span
					className={`h-0.5 w-4.5 bg-ground transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
				/>
				<span
					className={`h-0.5 w-4.5 bg-ground transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
				/>
			</button>

			{open && (
				<div
					ref={menuRef}
					id="mobile-menu"
					className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col gap-8 overflow-y-auto bg-ground dotgrid px-4 py-8"
				>
					<nav aria-label={t("nav.label")} className="flex flex-col border-t border-ink">
						{NAV_ITEMS.map((item) => (
							<NavLink
								key={item.href}
								href={item.href}
								className="flex min-h-16 items-center border-b border-rule font-serif text-4xl"
							>
								{t(`nav.${item.key}`)}
							</NavLink>
						))}
					</nav>
					{/* The language switch stays in the header bar, so it isn't repeated here. */}
					<ThemeToggle />
					<ButtonLink href="/contact">{t("cta.tellProject")} ↗</ButtonLink>
				</div>
			)}
		</div>
	);
}
