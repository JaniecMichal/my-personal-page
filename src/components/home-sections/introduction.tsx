'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { GradientButton } from "../ui/gradient-button";
import { Socials } from "../socials";
import profilePic from "../../assets/profile.jpg";

const PROFESSIONAL_TITLES = [
	{ text: "Frontend" },
	{ text: "Developer" },
	{ text: "with" },
	{ text: "expertise" },
	{ text: "in" },
	{ text: "React" },
	{ text: "ecosystem" },
];

export const Introduction = () => {
	return (
		<section className="relative py-12 md:py-24">
			<div className="container mx-auto px-4">
				<div className="grid items-center gap-12 md:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col space-y-6"
					>
						<div className="inline-block max-w-xs rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
							Looking for new challenges and projects
						</div>

						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
							<span className="block">Michał Janiec</span>
							<div className="mt-2 h-16">
								<TypewriterEffect words={PROFESSIONAL_TITLES} />
							</div>
						</h1>

						<p className="max-w-2xl text-lg text-gray-600 md:text-xl">
							I craft exceptional digital experiences with clean code and modern technologies.
							Specializing in building high-performance web applications that deliver results.
						</p>

						<div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
							<GradientButton
								href="mailto:michal.janiec95@gmail.com"
								icon={<FaEnvelope className="mr-2" />}
							>
								Get in Touch
							</GradientButton>

							<a
								href="/michal_janiec_cv.pdf"
								download="michal_janiec_cv"
								className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-blue-600"
							>
								<FaDownload className="mr-2" />
								Download CV
							</a>
						</div>

						<div className="pt-4">
							<Socials size="48px" />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="relative mx-auto aspect-square max-w-md"
					>
						<div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-[60px]" />
						<div className="relative overflow-hidden rounded-2xl border-2 border-blue-100 bg-white p-2 shadow-xl">
							<div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/30 blur-2xl" />
							<div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-purple-500/30 blur-2xl" />
							<Image
								src={profilePic || "/placeholder.svg"}
								alt="Michał Janiec - Frontend Developer"
								width={500}
								height={500}
								className="h-full w-full rounded-xl object-cover"
								priority
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
