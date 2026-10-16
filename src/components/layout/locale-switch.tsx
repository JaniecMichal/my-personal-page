"use client";

import { useLocale, useTranslations } from "next-intl";
import { useSelectedLayoutSegments } from "next/navigation";
import type { Localized } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { type AppPathname, routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

/** Translated slugs of every detail page, keyed by "<internal route>/<slug in the current locale>". */
export type AlternateSlugs = Record<string, Localized<string>>;

type Props = { alternates: AlternateSlugs; className?: string };

export function LocaleSwitch({ alternates, className }: Props) {
	const t = useTranslations("common.language");
	const locale = useLocale();
	// Folders under [locale] are the internal pathnames ("services", "work", "local"…). Unlike usePathname,
	// segments resolve during server rendering too, so crawlers get the right links, not a 404 slug.
	const [base, slug] = useSelectedLayoutSegments().filter(
		(s) => !s.startsWith("(") && !s.startsWith("__"),
	);
	const slugs = slug ? alternates[`${base}/${slug}`] : undefined;
	const pathname = (slugs ? `/${base}/[slug]` : base ? `/${base}` : "/") as AppPathname;
	const known = pathname in routing.pathnames;

	return (
		<div
			role="group"
			aria-label={t("label")}
			className={cn(
				"flex text-[13px] tracking-[0.12em] shadow-[inset_0_0_0_1px_var(--ink)]",
				className,
			)}
		>
			{routing.locales.map((l) => {
				const active = l === locale;
				const href = (
					known && slugs
						? { pathname, params: { slug: slugs[l] } }
						: { pathname: known ? pathname : "/" }
				) as Parameters<typeof Link>[0]["href"];

				return (
					<Link
						key={l}
						href={href}
						locale={l}
						hrefLang={l}
						lang={l}
						aria-current={active ? "true" : undefined}
						className={cn(
							"flex min-h-11 min-w-11 items-center justify-center px-3 uppercase no-underline",
							active ? "bg-ink text-ground" : "text-ink hover:text-accent",
						)}
					>
						{l}
						<span className="sr-only"> – {t(l)}</span>
					</Link>
				);
			})}
		</div>
	);
}
