"use client";

import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import type { Localized } from "@/content/types";

type Ctx = {
	slugs: Localized<string> | null;
	setSlugs: (slugs: Localized<string> | null) => void;
};

const AlternateSlugsContext = createContext<Ctx>({ slugs: null, setSlugs: () => {} });

export function AlternateSlugsProvider({ children }: { children: ReactNode }) {
	const [slugs, setSlugs] = useState<Localized<string> | null>(null);
	return <AlternateSlugsContext.Provider value={{ slugs, setSlugs }}>{children}</AlternateSlugsContext.Provider>;
}

export const useAlternateSlugs = () => useContext(AlternateSlugsContext).slugs;

/** Detail pages render this so the language switch links to the translated slug. */
export function SetAlternateSlugs({ slugs }: { slugs: Localized<string> }) {
	const { setSlugs } = useContext(AlternateSlugsContext);
	useEffect(() => {
		setSlugs(slugs);
		return () => setSlugs(null);
	}, [setSlugs, slugs]);
	return null;
}
