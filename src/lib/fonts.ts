import { Doto, Instrument_Serif, JetBrains_Mono } from "next/font/google";

export const serif = Instrument_Serif({
	weight: "400",
	style: ["normal", "italic"],
	subsets: ["latin", "latin-ext"],
	variable: "--font-instrument-serif",
	display: "swap",
});

export const mono = JetBrains_Mono({
	subsets: ["latin", "latin-ext"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

export const dots = Doto({
	weight: ["700", "900"],
	subsets: ["latin", "latin-ext"],
	variable: "--font-doto",
	display: "swap",
});

export const fontVariables = `${serif.variable} ${mono.variable} ${dots.variable}`;
