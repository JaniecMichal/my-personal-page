import { ButtonProps } from "./type";

export const PrimaryButton = ({ text, icon, href, ...props }: ButtonProps) => {
	return (
		<a
			href={href}
			className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition duration-200 hover:bg-blue-700"
			{...props}
		>
			{icon && icon}
			{text}
		</a>
	);
};
