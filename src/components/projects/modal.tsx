"use client"; // Ten komponent używa hooków Reacta 18
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseCircleFill } from "react-icons/ri";
import Image from "next/image";

import { Project } from "./types";

interface ProjectModalProps {
	project: Project;
	isOpen: boolean;
	onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
			>
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.8, opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="relative w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg"
				>
					<button
						onClick={onClose}
						className="absolute right-4 top-4 text-gray-600 hover:text-gray-800"
					>
						<RiCloseCircleFill />
					</button>

					<div className="flex flex-col gap-8 lg:flex-row">
						<div className="lg:w-1/2">
							<Image
								src={project.image}
								alt={project.title}
								width={500}
								height={300}
								className="rounded-lg"
							/>
						</div>
						<div className="lg:w-1/2">
							<h3 className="mb-4 text-2xl font-bold text-gray-800">{project.title}</h3>
							<p className="mb-4 text-gray-600">{project.description}</p>
							<h4 className="mb-2 text-lg font-semibold text-gray-800">Technologies:</h4>
							<ul className="mb-4 list-inside list-disc">
								{project.technologies.map((tech, index) => (
									<li key={index} className="text-gray-600">
										{tech}
									</li>
								))}
							</ul>
							<div className="flex gap-4">
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
									>
										See Live
									</a>
								)}
								{project.codeUrl && (
									<a
										href={project.codeUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="rounded-lg bg-gray-700 px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-600"
									>
										See Code
									</a>
								)}
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ProjectModal;
