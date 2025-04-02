"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FaDownload, FaEnvelope, FaArrowRight } from "react-icons/fa"
import { Socials } from "../src/components/socials"
import { TypewriterEffect } from "../src/components/ui/typewriter-effect"
import { GradientButton } from "../src/components/ui/gradient-button"
import { SkillBadge } from "../src/components/ui/skill-badge"
//import { TestimonialPreview } from "../src/components/testimonial-preview"
import { Services } from "../src/components/services"
import profilePic from "../src/assets/profile.jpg";



const CORE_SKILLS = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL"]

const PROFESSIONAL_TITLES = [
  { text: "Frontend" },
  { text: "Developer" },
  { text: "with" },
  { text: "expertise" },
  { text: "in" },
  { text: "React" },
  { text: "ecosystem" },
]

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.12),transparent)]" />
      <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[200px] w-[200px] rounded-full bg-purple-500/20 blur-[100px]" />


      <section className="relative py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-6"
            >
              <div className="max-w-xs inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                Looking for new challenges and projects
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Michał Janiec</span>
                <div className="mt-2 h-16">
                  <TypewriterEffect words={PROFESSIONAL_TITLES} />
                </div>
              </h1>

              <p className="max-w-2xl text-lg text-gray-600 md:text-xl">
                I craft exceptional digital experiences with clean code and modern technologies. Specializing in
                building high-performance web applications that deliver results.
              </p>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <GradientButton href="mailto:michal.janiec95@gmail.com" icon={<FaEnvelope className="mr-2" />}>
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
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-[60px] opacity-20" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-blue-100 bg-white p-2 shadow-xl">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/30 blur-2xl" />
                <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-purple-500/30 blur-2xl" />
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

      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Core Expertise</h2>
            <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {CORE_SKILLS.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} index={index} />
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              View all my skills
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Services />

     {/*  <TestimonialPreview /> */}

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            I'm currently available for freelance projects and full-time opportunities. Let's create something amazing
            together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-lg transition-all hover:bg-blue-50"
          >
            Contact Me
            <FaArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

