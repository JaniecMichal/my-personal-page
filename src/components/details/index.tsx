import { FaMapMarkerAlt, FaLanguage } from "react-icons/fa";

const locationData = {
	city: "Katowice",
	country: "Poland",
};

const languagesData = [
	{ name: "Polish", level: "Native" },
	{ name: "English", level: "Intermediate" },
];

export const Details = () => {
	return (
		<section className="bg-gray-200/20 py-12">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="flex items-center">
						<FaMapMarkerAlt className="mr-4 h-8 w-8 text-blue-500" />
						<div>
							<h4 className="text-xl font-semibold text-gray-800">Location</h4>
							<p className="text-gray-600">
								{locationData.city}, {locationData.country}
							</p>
						</div>
					</div>

					<div className="flex items-center">
						<FaLanguage className="mr-4 h-8 w-8 text-blue-500" />
						<div>
							<h4 className="text-xl font-semibold text-gray-800">Languages</h4>
							<ul className="text-gray-600">
								{languagesData.map((language, index) => (
									<li key={index}>
										{language.name} ({language.level})
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
