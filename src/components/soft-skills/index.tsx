"use client"
import { PageSectionLayout } from "@/design-system/page-section-layout"
import { motion } from "framer-motion"

const softSkills = [
  "Communication",
  "Teamwork",
  "Proactivity",
  "Goal-Oriented",
  "Analytical Thinking",
  "Fast Learning",
  "Team Leadership",
  "Relationship Building",
  "Adaptability to changing environments",
]

export const SoftSkills = () => {
  return (
    <PageSectionLayout sectionTitle="Key Qualities">
      <div className="relative mx-auto w-full max-w-4xl">
        <ul className="flex flex-wrap justify-center gap-8">
          {softSkills.map((skill, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-lg bg-gray-300 px-4 py-2 shadow-md"
            >
              <div className="absolute -left-4 -top-4 h-4 w-4 origin-bottom-right rotate-45 transform bg-gray-300"></div>
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </PageSectionLayout>
  )
}

