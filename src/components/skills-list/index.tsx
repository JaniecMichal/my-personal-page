"use client";
import { useState } from "react";

type Skill = {
	name: string;
	description?: string;
};

type SkillsListProps = {
	listTitle: string;
	skills: Skill[];
};

export const SkillsList = ({ listTitle, skills }: SkillsListProps) => {
	const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

	return (
		<section className="py-12">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<h3 className="mb-8 text-center text-2xl font-bold text-gray-800">{listTitle}</h3>

				<ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{skills.map((skill, index) => {
						const isSelected = selectedSkill === index;
						const sizeF = "h-[250px]";
						return (
							<li
								key={index}
								onClick={() => setSelectedSkill(isSelected ? null : index)}
								className={`${isSelected ? "h-[250px]" : " h-[80px]"} rounded-lg border-4 border-gray-100 bg-white p-6 shadow-md hover:border-blue-600 `}
							>
								{skill.name}
								{skill.description && (
									<span className="ml-2 text-sm text-gray-600">(read more)</span>
								)}

								{isSelected && <p className="mt-2 text-gray-600">{skill.description}</p>}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};
