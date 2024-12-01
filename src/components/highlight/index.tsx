export const Highlight = ({ children }: { children: React.ReactNode }) => {
	return (
		<span className="relative inline-block font-semibold">
			{children}
			<span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-100 rounded-lg bg-blue-600 transition-transform duration-300"></span>
		</span>
	);
};
