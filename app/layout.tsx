import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Header } from "../src/components/header";
import { Footer } from "../src/design-system/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
	title: "Michał Janiec | Senior Frontend Developer | React & Next.js Expert",
	description:
		"Experienced frontend developer specializing in React, Next.js, and TypeScript. Creating high-performance web applications with modern technologies.",
	keywords:
		"frontend developer, React developer, Next.js expert, TypeScript, web development, UI/UX, JavaScript, Michał Janiec",
	authors: [{ name: "Michał Janiec" }],
	openGraph: {
		title: "Michał Janiec | Senior Frontend Developer",
		description: "Experienced frontend developer specializing in React, Next.js, and TypeScript.",
		url: "https://mjaniec.it",
		siteName: "Michał Janiec Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://mjaniec.it/mjaniec-og.png",
				width: 1200,
				height: 630,
				alt: "Michał Janiec - OG Image",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Michał Janiec | Senior Frontend Developer",
		description: "Experienced frontend developer specializing in React, Next.js, and TypeScript.",
		images: ["https://mjaniec.it/mjaniec-og.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`bg-white text-gray-800 ${inter.className}`}>
				<div className="mx-auto min-h-screen w-full">
					<Header />
					<main>{children}</main>
					<Footer />
					<Analytics />
				</div>
			</body>
		</html>
	);
}

import "./globals.css";
