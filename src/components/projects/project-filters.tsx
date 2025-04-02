"use client";
import { useEffect, useState } from "react";
import { FaSearch, FaTimes, FaFilter } from "react-icons/fa";
import { ProjectType } from "@/api/projects";
import { ProjectCardSkeleton } from "./project-skeleton";
import ProjectCardGrid from "./project-card-grid";

type Props = {
	allProjects: ProjectType[];
};

export default function ProjectFilters({ allProjects }: Props) {
	const [projects, setProjects] = useState(allProjects);
	const [filteredProjects, setFilteredProjects] = useState(allProjects);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTech, setSelectedTech] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const allTechnologies = Array.from(
		new Set(allProjects.flatMap((p) => p.technologies.filter(Boolean))),
	).sort();

	useEffect(() => {
		setIsLoading(true);

		const timeout = setTimeout(() => {
			let result = [...projects];

			if (searchTerm) {
				const term = searchTerm.toLowerCase();
				result = result.filter(
					(project) =>
						project.name?.toLowerCase().includes(term) ||
						project.description?.toLowerCase().includes(term),
				);
			}

			if (selectedTech) {
				result = result.filter((project) =>
					project.technologies.some((tech) => tech.toLowerCase() === selectedTech.toLowerCase()),
				);
			}

			setFilteredProjects(result);
			setIsLoading(false);
		}, 300); // dodajemy małe opóźnienie dla UX (symulacja ładowania)

		return () => clearTimeout(timeout);
	}, [searchTerm, selectedTech, projects]);

	const clearFilters = () => {
		setSearchTerm("");
		setSelectedTech(null);
	};

	return (
		<>
			<div className="mx-auto mb-12 max-w-5xl">
				<div className="rounded-lg bg-white p-4 shadow-md">
					<div className="flex flex-col gap-4 md:flex-row">
						<div className="relative flex-1">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<FaSearch className="text-gray-400" />
							</div>
							<input
								type="text"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								placeholder="Search projects..."
								className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3"
							/>
						</div>

						<div className="w-full md:w-64">
							<div className="relative">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<FaFilter className="text-gray-400" />
								</div>
								<select
									value={selectedTech || ""}
									onChange={(e) => setSelectedTech(e.target.value || null)}
									className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-10"
								>
									<option value="">All Technologies</option>
									{allTechnologies.map((tech) => (
										<option key={tech} value={tech}>
											{tech}
										</option>
									))}
								</select>
							</div>
						</div>

						{(searchTerm || selectedTech) && (
							<button
								onClick={clearFilters}
								className="flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
							>
								<FaTimes className="mr-2" />
								Clear Filters
							</button>
						)}
					</div>
				</div>
			</div>

			{isLoading ? (
				<div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
					{[...Array(6)].map((_, index) => (
						<ProjectCardSkeleton key={index} />
					))}
				</div>
			) : (
				<ProjectCardGrid projects={filteredProjects} clearFilters={clearFilters} />
			)}
		</>
	);
}
