import NextLink from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { content } from "@/content";
import { Link } from "@/i18n/navigation";

const linkClass = "text-inverse-ink/80 no-underline hover:text-inverse-ink";

export async function Footer() {
	const locale = await getLocale();
	const t = await getTranslations("common");
	const [settings, services] = await Promise.all([content.getSiteSettings(locale), content.getServices(locale)]);

	return (
		<footer className="inverse border-t border-rule">
			<Container className="grid grid-cols-1 gap-10 py-14 text-sm sm:grid-cols-2 lg:grid-cols-4">
				<div className="flex flex-col gap-3">
					<span className="label">{t("footer.services")}</span>
					{services.slice(0, 5).map((s) => (
						<Link key={s.slug} href={{ pathname: "/services/[slug]", params: { slug: s.slug } }} className={linkClass}>
							{s.title}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-3">
					<span className="label">{t("footer.site")}</span>
					<Link href="/work" className={linkClass}>{t("nav.work")}</Link>
					<Link href="/pricing" className={linkClass}>{t("nav.pricing")}</Link>
					<Link href="/cv" className={linkClass}>{t("nav.cv")}</Link>
					<Link href="/contact" className={linkClass}>{t("nav.contact")}</Link>
				</div>
				<div className="flex flex-col gap-3">
					<span className="label">{t("footer.profile")}</span>
					{settings.socials.map((s) => (
						<a key={s.href} href={s.href} className={linkClass} rel="me noopener" target="_blank">
							{s.label} ↗
						</a>
					))}
					<NextLink href="/terminal" className={linkClass}>
						{t("footer.terminal")} →
					</NextLink>
				</div>
				<div className="flex flex-col gap-3 text-muted">
					<span className="label">{settings.name}</span>
					<a href={`mailto:${settings.email}`} className={linkClass}>{settings.email}</a>
					<span>{settings.location}</span>
					<span>
						{t("footer.rights", { year: new Date().getFullYear() })} ·{" "}
						<Link href="/privacy" className={linkClass}>{t("footer.privacy")}</Link>
					</span>
				</div>
			</Container>
		</footer>
	);
}
