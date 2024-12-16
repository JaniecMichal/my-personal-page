import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Janiec Michał - Frontend Developer Portfolio",
	description: "My personal page to demonstrate me and my skills",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-gray-200 text-gray-800 ${inter.className}`}>
				<div className="mx-auto h-screen w-screen px-4 sm:px-6 lg:px-12">
					<Header />

					<main className="py-8">{children}</main>

					<Footer />
				</div>
			</body>
		</html>
	);
}
