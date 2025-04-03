"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export const ContactSection = () => {
	return (
		<>
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mb-12 text-center"
					>
						<h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
							Get in <span className="text-gradient">touch</span>
						</h1>
						<p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
							Let's discuss your{" "}
							<span className="font-medium text-blue-600">project or opportunity</span>
						</p>
						<div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mx-auto mb-16 max-w-3xl"
					>
						<p className="text-center text-lg text-gray-700">
							I'm always open to discussing new projects, creative ideas, or opportunities to be
							part of your vision. Feel free to contact me using the form below, and I'll get back
							to you as soon as possible.
						</p>
					</motion.div>

					<div className="mb-16 grid gap-12 md:grid-cols-3">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="rounded-xl bg-white p-6 text-center shadow-sm"
						>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
								<FaEnvelope size={24} />
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-900">Email</h3>
							<a
								href="mailto:michal.janiec95@gmail.com"
								className="text-blue-600 transition-colors hover:text-blue-800"
							>
								Contact via email
							</a>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="rounded-xl bg-white p-6 text-center shadow-sm"
						>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
								<FaMapMarkerAlt size={24} />
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-900">Location</h3>
							<p className="text-gray-700">Katowice, Poland</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="rounded-xl bg-white p-6 text-center shadow-sm"
						>
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
								<FaLinkedin size={24} />
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-900">LinkedIn</h3>
							<a
								href="https://www.linkedin.com/in/janiecmichal/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 transition-colors hover:text-blue-800"
							>
								Connect with me
							</a>
						</motion.div>
					</div>

					{/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ContactForm />
          </motion.div> */}
				</div>
			</section>
		</>
	);
};
