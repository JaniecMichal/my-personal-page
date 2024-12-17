"use client";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import {
	SiHtml5,
	SiCss3,
	SiSass,
	SiTailwindcss,
	SiStyledcomponents,
	SiNextdotjs,
	SiReact,
	SiJest,
	SiTestinglibrary,
	SiRedux,
	SiGraphql,
	SiJavascript,
	SiTypescript,
	SiMui,
} from "react-icons/si";

const skills = [
	{ name: "HTML", icon: <SiHtml5 /> },
	{ name: "CSS", icon: <SiCss3 /> },
	{ name: "Sass", icon: <SiSass /> },
	{ name: "Material-UI", icon: <SiMui /> },
	{ name: "Tailwind CSS", icon: <SiTailwindcss /> },
	{ name: "Styled-Components", icon: <SiStyledcomponents /> },
	{ name: "Next.js", icon: <SiNextdotjs /> },
	{ name: "React", icon: <SiReact /> },
	{ name: "Jest", icon: <SiJest /> },
	{ name: "React Testing Library", icon: <SiTestinglibrary /> },
	{ name: "Redux", icon: <SiRedux /> },
	{ name: "RTK Query", icon: <SiRedux /> }, // Brak ikony dla RTK Query, używam ikony Redux
	{ name: "GraphQL", icon: <SiGraphql /> },
	{ name: "JavaScript", icon: <SiJavascript /> },
	{ name: "TypeScript", icon: <SiTypescript /> },
];

export const Skills = () => {
	return (
		<IconContext.Provider value={{ size: "64px" }}>
			<article className="mt-8 ">
				<header className="mb-8">
					<h3 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-3xl">
						These are technologies I enjoy working with
					</h3>
					<div className="mx-auto h-1 w-20 rounded-full bg-blue-500"></div>
				</header>

				<ul className="flex flex-wrap gap-6">
					{skills.map((skill, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative"
						>
							<div className="mx-auto flex h-24 w-24 items-center justify-center rounded-lg bg-gray-200 transition-colors duration-200 hover:bg-blue-500">
								{skill.icon}
							</div>
							<div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-4 transform opacity-0 transition-opacity duration-200 group-hover:opacity-100">
								<div className="rounded-lg bg-gray-600 px-2 py-1 text-sm text-white shadow-lg">
									{skill.name}
								</div>
							</div>
						</motion.li>
					))}
				</ul>
			</article>
		</IconContext.Provider>
	);
};
