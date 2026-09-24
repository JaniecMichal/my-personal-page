import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

const VARIANTS = {
	primary: "bg-accent text-on-accent hover:bg-accent-hover",
	ink: "bg-ink text-ground hover:bg-accent hover:text-on-accent",
	line: "text-ink shadow-[inset_0_0_0_1px_var(--ink)] hover:bg-ink hover:text-ground",
	light: "bg-inverse-ink text-inverse hover:bg-accent hover:text-on-accent",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

export const buttonClass = (variant: ButtonVariant = "primary", size: "md" | "sm" = "md") =>
	cn(
		"chamfer inline-flex items-center gap-3 font-dots font-black uppercase tracking-wide no-underline transition-colors",
		size === "md" ? "h-13 px-5.5 text-lg" : "h-11 px-4 text-base",
		VARIANTS[variant],
	);

type InternalProps = Omit<ComponentProps<typeof Link>, "className"> & {
	variant?: ButtonVariant;
	size?: "md" | "sm";
	className?: string;
};

/** Button-styled link for internal, locale-aware routes. */
export function ButtonLink({ variant, size, className, ...props }: InternalProps) {
	return <Link {...props} className={cn(buttonClass(variant, size), className)} />;
}

type ExternalProps = ComponentProps<"a"> & { variant?: ButtonVariant; size?: "md" | "sm"; children: ReactNode };

/** Button-styled link for mailto:, files and external URLs. */
export function ButtonAnchor({ variant, size, className, ...props }: ExternalProps) {
	return <a {...props} className={cn(buttonClass(variant, size), className)} />;
}
