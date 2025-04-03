"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../../src/assets/profile.jpg";

export const PersonalDescription = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center"
				>
					<h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
						Something about <span className="text-gradient">me</span>
					</h1>
					<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
						Frontend Developer with ReactJS and NextJS, ready for big challenges
					</p>
					<div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
				</motion.div>

				<div className="grid items-center gap-12 md:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700">
								👨‍🎓💻🖥 I'm an experienced and ambitious frontend developer with over 4 years of
								experience in the industry. I thrive on writing clean, efficient code and have a
								proven track record of leading development teams to success.
							</p>
							<p className="text-gray-700">
								I'm passionate about delivering high-quality products and enthusiastically embrace
								new challenges to continually expand my skill set. I love learning new things and
								being in the midst of the creative storm where amazing interfaces and applications
								emerge – those that simplify and enhance everyday life.
							</p>
							<p className="text-gray-700">
								I'm currently seeking a stimulating environment where I can utilize my skills and
								grow as a developer. I'm a loyal and reliable employee who takes my responsibilities
								seriously.
							</p>
							<p className="text-gray-700">
								I enjoy staying active and participating in sports, which helps me develop the
								character and discipline that are also essential in my work as a programmer. I
								recently completed a half marathon and am constantly setting new goals to strive
								for.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="relative"
					>
						<div className="absolute inset-0 -z-10 rotate-6 transform rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-xl"></div>
						<div className="relative overflow-hidden rounded-2xl shadow-xl">
							<Image
								src={profilePic || "/placeholder.svg"}
								alt="Michał Janiec - About me"
								width={800}
								height={600}
								className="h-auto w-full object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
