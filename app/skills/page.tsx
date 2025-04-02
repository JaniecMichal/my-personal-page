"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaCode, FaTools, FaPalette, FaServer, FaDatabase, FaLaptopCode } from "react-icons/fa"

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <FaCode />,
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "React" },
      { name: "Redux" },
      { name: "React Native" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "styling",
    name: "Styling",
    icon: <FaPalette />,
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "Tailwind CSS" },
      { name: "Styled Components" },
      { name: "Sass/SCSS" },
      { name: "Material-UI" },
      { name: "CSS Modules" },
      { name: "Responsive Design" },
      { name: "Chakra-UI" },
    ],
  },
  {
    id: "state",
    name: "State Management",
    icon: <FaLaptopCode />,
    color: "from-indigo-500 to-indigo-600",
    skills: [
      { name: "Redux" },
      { name: "RTK Query" },
      { name: "Context API" },
      { name: "Zustand" },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    icon: <FaServer />,
    color: "from-green-500 to-green-600",
    skills: [
      { name: "GraphQL" },
      { name: "REST APIs" },
      { name: "API Integration" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Workflow",
    icon: <FaTools />,
    color: "from-amber-500 to-amber-600",
    skills: [
      { name: "Git" },
      { name: "GitHub/GitLab" },
      { name: "Storybook" },
      { name: "Jest" },
      { name: "Testing Library" },
      { name: "npm/yarn/pnpm" },
    ],
  },
  {
    id: "other",
    name: "Other Technologies",
    icon: <FaDatabase />,
    color: "from-rose-500 to-rose-600",
    skills: [
      { name: "CMS" },
      { name: "MSW" },
      { name: "AI Integration" },
      { name: "Responsive Design" },
      { name: "Performance Optimization" },
    ],
  },
]
const SOFT_SKILLS = [
  { name: "Communication" },
  { name: "Teamwork" },
  { name: "Proactivity" },
  { name: "Goal-Oriented" },
  { name: "Analytical Thinking" },
  { name: "Fast Learning" },
  { name: "Team Leadership" },
  { name: "Relationship Building" },
  { name: "Adaptability" },
]

export default function MySkills() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.08),transparent)]" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              My <span className="text-gradient">skills</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Skills that make me capable <span className="text-blue-600 font-medium">of great things</span>
            </p>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <p className="text-lg text-gray-700 text-center">
              Here's a list of the skills I've acquired throughout my professional career and through dedicated
              self-improvement outside of work. I'm committed to continuous learning and expanding my knowledge to stay
              up-to-date with the latest technologies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
            <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {SKILL_CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {SKILL_CATEGORIES.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCategory === category.id ? 1 : 0,
                  y: activeCategory === category.id ? 0 : 20,
                  display: activeCategory === category.id ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid gap-4 md:grid-cols-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <span className="font-medium text-gray-800">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Key Qualities</h2>
            <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4 md:grid-cols-3">
              {SOFT_SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-sm text-center"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

