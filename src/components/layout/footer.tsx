import NextLink from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { EmailLink } from "@/components/ui/email-link";
import { PhoneLink } from "@/components/ui/phone-link";
import { content } from "@/content";
import { Link } from "@/i18n/navigation";
import { encodeEmail, encodePhone } from "@/lib/email";

// min-h-11 keeps every footer link a 44px touch target; the column gap is the row height itself.
const linkClass =
	"inline-flex min-h-11 items-center text-inverse-ink/80 no-underline hover:text-inverse-ink";

export async function Footer() {
	const locale = await getLocale();
	const t = await getTranslations("common");
	const [settings, services, localPages] = await Promise.all([
		content.getSiteSettings(locale),
		content.getServices(locale),
		content.getLocalPages(locale),
	]);

	return (
		<footer className="border-t border-rule inverse">
			<Container className="grid grid-cols-1 gap-10 py-14 text-sm sm:grid-cols-2 lg:grid-cols-4">
				<div className="flex flex-col">
					<span className="mb-2 label">{t("footer.services")}</span>
					{services.slice(0, 5).map((s) => (
						<Link
							key={s.slug}
							href={{ pathname: "/services/[slug]", params: { slug: s.slug } }}
							className={linkClass}
						>
							{s.title}
						</Link>
					))}
					{localPages.length > 0 && <span className="mt-6 mb-2 label">{t("footer.local")}</span>}
					{localPages.map((page) => (
						<Link
							key={page.slug}
							href={{ pathname: "/local/[slug]", params: { slug: page.slug } }}
							className={linkClass}
						>
							{page.title}
						</Link>
					))}
				</div>
				<div className="flex flex-col">
					<span className="mb-2 label">{t("footer.site")}</span>
					<Link href="/work" className={linkClass}>
						{t("nav.work")}
					</Link>
					<Link href="/pricing" className={linkClass}>
						{t("nav.pricing")}
					</Link>
					<Link href="/cv" className={linkClass}>
						{t("nav.cv")}
					</Link>
					<Link href="/contact" className={linkClass}>
						{t("nav.contact")}
					</Link>
				</div>
				<div className="flex flex-col">
					<span className="mb-2 label">{t("footer.profile")}</span>
					{settings.socials.map((s) => (
						<a key={s.href} href={s.href} className={linkClass} rel="me noopener" target="_blank">
							{s.label} ↗
						</a>
					))}
					<NextLink href="/terminal" className={linkClass}>
						{t("footer.terminal")} →
					</NextLink>
				</div>
				<div className="flex flex-col text-muted">
					<span className="mb-2 label">{settings.name}</span>
					<EmailLink encoded={encodeEmail(settings.email)} className={linkClass} />
					{settings.phone && (
						<PhoneLink
							encoded={encodePhone(settings.phone)}
							label={t("phone")}
							className={linkClass}
						/>
					)}
					<span>{settings.location}</span>
					<span>
						{t("footer.rights", { year: new Date().getFullYear() })} ·{" "}
						<Link
							href="/privacy"
							className="inline-flex min-h-11 items-center text-inverse-ink/80 underline underline-offset-2 hover:text-inverse-ink"
						>
							{t("footer.privacy")}
						</Link>
					</span>
				</div>
			</Container>
		</footer>
	);
}
