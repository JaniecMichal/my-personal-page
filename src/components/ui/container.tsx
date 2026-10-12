import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Horizontal page gutter: 16px on phones up to 96px on wide screens. */
export const gutter = "px-4 md:px-10 xl:px-24";

export function Container({ className, ...props }: ComponentProps<"div">) {
	return <div className={cn("mx-auto w-full max-w-[1600px]", gutter, className)} {...props} />;
}
