import type { HeadingProps } from "./types";

export const MainHeading = ({ text }: HeadingProps) => {
	return <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl lg:text-8xl">{text}</h1>;
};
