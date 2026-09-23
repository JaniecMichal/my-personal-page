import type React from "react";
import { Header } from "../../src/components/header";
import { Footer } from "../../src/design-system/footer";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="mx-auto min-h-screen w-full bg-white text-gray-800">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
