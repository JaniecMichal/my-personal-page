import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Header } from "../src/components/header"
import { Footer } from "../src/design-system/footer"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

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
    url: "https://michaljaniec.com",
    siteName: "Michał Janiec Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michał Janiec | Senior Frontend Developer",
    description: "Experienced frontend developer specializing in React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-white text-gray-800 ${inter.className}`}>
        <div className="mx-auto min-h-screen w-full">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'