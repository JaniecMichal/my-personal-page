import type { HeadingProps } from "./types";

export const SubHeading = ({ text }: HeadingProps) => {
	return (
		<h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl lg:text-4xl">{text}</h2>
	);
};
