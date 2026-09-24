"use client";

import { type ReactNode, useEffect, useState } from "react";
import { decodeEmail } from "@/lib/email";

type Props = { encoded: string; className?: string; children?: ReactNode };

/** Mailto link that only exists after hydration. Pass `children` to show a label instead of the address. */
export function EmailLink({ encoded, className, children }: Props) {
	const [email, setEmail] = useState<string | null>(null);

	useEffect(() => setEmail(decodeEmail(encoded)), [encoded]);

	if (!email) return <span className={className}>{children ?? "e-mail"}</span>;

	return (
		<a href={`mailto:${email}`} className={className}>
			{children ?? email}
		</a>
	);
}
