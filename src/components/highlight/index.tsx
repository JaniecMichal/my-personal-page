type HighlightProps = {
	children: React.ReactNode;
	hideLine?: boolean;
	className?: string;
};

export const Highlight = ({ children, hideLine, className }: HighlightProps) => {
	return (
		<span className={`relative inline-block font-semibold ${className ? className : ""}`}>
			{children}
			{!hideLine && (
				<span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-100 rounded-lg bg-blue-600 transition-transform duration-300"></span>
			)}
		</span>
	);
};
