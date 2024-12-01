import { ButtonProps } from "./type";

export const SecondaryButton = ({ text, icon, href }: ButtonProps) => {
	return (
		<a
			href={href}
			className="inline-block rounded-lg border border-gray-300 bg-gray-200 px-6 py-3 font-medium text-gray-600 transition duration-200 hover:border-gray-400 hover:bg-gray-300"
		>
			{icon}
			{text}
		</a>
	);
};
