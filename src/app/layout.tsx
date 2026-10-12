import type { ReactNode } from "react";

// Each segment ([locale], terminal) renders its own <html>, so this layout only passes through.
export default function RootLayout({ children }: { children: ReactNode }) {
	return children;
}
