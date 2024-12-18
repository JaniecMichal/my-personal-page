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
			<body
				className={`bg-white bg-[radial-gradient(#2564eb_1px,transparent_0.5px)] text-gray-800 [background-size:16px_16px] ${inter.className}`}
			>
				<div className="mx-auto h-full w-screen px-4 sm:px-6 lg:px-12">
					<Header />

					<main className="py-8">{children}</main>
				</div>
			</body>
		</html>
	);
}
