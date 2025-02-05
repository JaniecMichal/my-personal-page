type PageSectionLayoutProps = {
	sectionTitle: string;
	children: React.ReactNode;
};

export const PageSectionLayout = ({ children, sectionTitle }: PageSectionLayoutProps) => {
	return (
		<section className="rounded-lg bg-gray-200/40 py-8">
			<div className="mx-auto px-4 md:px-6 lg:px-8">
				<header className="mb-8">
					<h3 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-3xl">
						{sectionTitle}
					</h3>
					<div className="mx-auto h-1 w-20 rounded-full bg-blue-500"></div>
				</header>
				{children}
			</div>
		</section>
	);
};
