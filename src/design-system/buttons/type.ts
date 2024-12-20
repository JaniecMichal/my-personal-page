import { JSX } from "react";

export type ButtonProps = {
	text: string;
	icon?: JSX.Element;
	href: string;
	download?: string;
	rel?: string;
	target?: string;
	size?: "normal" | "small";
};
