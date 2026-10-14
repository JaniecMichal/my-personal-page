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
				"sticky top-0 z-50 flex h-16 items-center justify-between gap-6 border-b border-rule bg-ground/90 backdrop-blur-md lg:h-22",
				gutter,
			)}
		>
			<Link
				href="/"
				className="flex min-h-11 items-center font-serif text-3xl leading-none text-ink no-underline lg:text-4xl"
			>
				mj<span className="text-accent">.</span>
				<span className="sr-only"> Michał Janiec, start</span>
			</Link>

			<nav
				aria-label={t("nav.label")}
				className="hidden gap-6 text-[13px] tracking-[0.14em] uppercase lg:flex xl:gap-9"
			>
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
					{t("cta.tellProject")} ↗
				</ButtonLink>
			</div>

			<div className="flex items-center gap-2 lg:hidden">
				<LocaleSwitch />
				<MobileMenu />
			</div>
		</header>
	);
}
