"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useAlternateSlugs } from "@/components/i18n/alternate-slugs";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LocaleSwitch({ className }: { className?: string }) {
	const t = useTranslations("common.language");
	const locale = useLocale();
	const pathname = usePathname();
	const params = useParams<{ slug?: string }>();
	const alternates = useAlternateSlugs();

	return (
		<div
			role="group"
			aria-label={t("label")}
			className={cn("flex text-[13px] tracking-[0.12em] shadow-[inset_0_0_0_1px_var(--ink)]", className)}
		>
			{routing.locales.map((l) => {
				const active = l === locale;
				const slug = alternates?.[l] ?? params.slug;
				// Pathname is the internal template (e.g. "/services/[slug]"); params fill it in.
				const href = (slug ? { pathname, params: { slug } } : { pathname }) as Parameters<typeof Link>[0]["href"];

				return (
					<Link
						key={l}
						href={href}
						locale={l}
						hrefLang={l}
						lang={l}
						aria-current={active ? "true" : undefined}
						aria-label={t(l)}
						className={cn(
							"flex min-h-11 min-w-11 items-center justify-center px-3 uppercase no-underline",
							active ? "bg-ink text-ground" : "text-ink hover:text-accent",
						)}
					>
						{l}
					</Link>
				);
			})}
		</div>
	);
}
