"use client";

import { useEffect, useState } from "react";
import { decodePhone } from "@/lib/email";

type Props = { encoded: string; label: string; className?: string };

/** Tel link that only exists after hydration. Shows `label` until then, so the number stays out of the HTML. */
export function PhoneLink({ encoded, label, className }: Props) {
	const [phone, setPhone] = useState<string | null>(null);

	useEffect(() => setPhone(decodePhone(encoded)), [encoded]);

	if (!phone) return <span className={className}>{label}</span>;

	return (
		<a href={`tel:${phone.replace(/\s/g, "")}`} className={className}>
			{phone}
		</a>
	);
}
