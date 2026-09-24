"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
	const t = useTranslations("common.theme");
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	const dark = mounted && resolvedTheme === "dark";

	return (
		<button
			type="button"
			onClick={() => setTheme(dark ? "light" : "dark")}
			aria-label={dark ? t("toLight") : t("toDark")}
			title={dark ? t("toLight") : t("toDark")}
			className={cn(
				"flex size-11 items-center justify-center text-ink shadow-[inset_0_0_0_1px_var(--ink)] hover:bg-ink hover:text-ground",
				className,
			)}
		>
			{/* Half-filled circle; the fill side flips with the theme. */}
			<svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
				<circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
				<path d={dark ? "M10 2.5a7.5 7.5 0 0 0 0 15z" : "M10 2.5a7.5 7.5 0 0 1 0 15z"} fill="currentColor" />
			</svg>
		</button>
	);
}
