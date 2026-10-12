import "@/styles/globals.css";
import Link from "next/link";
import { fontVariables } from "@/lib/fonts";

// Catches URLs outside any locale (the middleware normally redirects them first).
export default function GlobalNotFound() {
	return (
		<html lang="pl" className={fontVariables}>
			<body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ground p-6 text-center text-ink">
				<p className="font-dots text-7xl font-black text-accent">404</p>
				<h1 className="font-serif text-5xl">Tej strony nie ma. / This page doesn&apos;t exist.</h1>
				<p className="flex gap-6">
					<Link href="/pl">Strona główna</Link>
					<Link href="/en">Home</Link>
				</p>
			</body>
		</html>
	);
}
