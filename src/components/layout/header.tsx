import { getTranslations } from "next-intl/server";
import { LocaleSwitch } from "./locale-switch";
import { MobileMenu } from "./mobile-menu";
import { NAV_ITEMS } from "./nav-items";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/cn";
import { Link } from "@/i18n/navigation";
import { gutter } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export async function Header() {
	const t = await getTranslations("common");

	return (
		<header
			className={cn(
				"sticky top-0 z-50 flex h-16 items-center justify-between border-b border-rule bg-ground/90 backdrop-blur-md lg:h-22",
				gutter,
			)}
		>
			<Link href="/" className="font-serif text-3xl leading-none text-ink no-underline lg:text-4xl" aria-label="Michał Janiec — start">
				mj<span className="text-accent">.</span>
			</Link>

			<nav aria-label={t("nav.label")} className="hidden gap-9 text-[13px] uppercase tracking-[0.14em] lg:flex">
				{NAV_ITEMS.map((item) => (
					<NavLink key={item.href} href={item.href} className="pb-1.5">
						{t(`nav.${item.key}`)}
					</NavLink>
				))}
			</nav>

			<div className="hidden items-center gap-3 lg:flex">
				<LocaleSwitch />
				<ThemeToggle />
				<ButtonLink href="/contact" size="sm" className="ml-3">
					{t("cta.quote")} ↗
				</ButtonLink>
			</div>

			<div className="flex items-center gap-2 lg:hidden">
				<LocaleSwitch />
				<MobileMenu />
			</div>
		</header>
	);
}
