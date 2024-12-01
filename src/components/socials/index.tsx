import { Github, LinkedinIcon } from "lucide-react";

export const Socials = () => {
	return (
		<section className="flex space-x-4">
			<a href="#">
				<LinkedinIcon className="h-6 w-6 text-gray-600 hover:text-blue-500" />
			</a>
			<a href="#">
				<Github className="h-6 w-6 text-gray-600 hover:text-blue-500" />
			</a>
		</section>
	);
};
