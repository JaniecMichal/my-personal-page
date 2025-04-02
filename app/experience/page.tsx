"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa"

const EXPERIENCES = [
  {
    id: "hire-me",
    company: "to-your-company",
    period: "available immediately",
    role: "Hire me :)",
    location: "Office/Hybrid/Remote",
    logo: "/placeholder.svg?height=80&width=80",
    color: "green",
    duties: [
    "Ready to work for you"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "jemWszkole",
    company: "jemWszkole.pl",
    period: "02.2025 - 03.2025",
    role: "React Developer",
    location: "Katowice, Poland",
    logo: "/placeholder.svg?height=80&width=80",
    color: "blue",
    duties: [
      "Collaborating with the team to prepare web applications for publication",
      "Identifying, troubleshooting, and fixing bugs in web applications",
      "Continuously improving the quality of the codebase by refactoring and optimizing",
      "Implementing new interfaces and functionalities to enhance user experience",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "gainflow",
    company: "Gainflow",
    period: "12.2024 - present",
    role: "Co-founder & Software Developer",
    location: "Remote",
    logo: "/placeholder.svg?height=80&width=80",
    color: "purple",
    duties: [
      "Implemented new features and functionalities based on user feedback",
      "Optimized app performance and collaborated with backend developers",
      "Conducted market research and analyzed user needs",
      "Brainstormed and conceptualized innovative functionalities",
      "Prioritized features based on impact and feasibility",
      "Contributed to the development of brand vision, mission, and values",
    ],
    technologies: ["React Native", "TypeScript", "Redux", "Node.js", "Firebase"],
  },
  {
    id: "hexocean",
    company: "HexOcean",
    period: "2021 - 2024",
    role: "Frontend Developer",
    location: "Warsaw, Poland",
    logo: "/placeholder.svg?height=80&width=80",
    color: "indigo",
    duties: [
      "Created new components with styles and unit tests",
      "Created email templates in HTML",
      "Implemented new features and created business logic",
      "Conducted code reviews and performed refactoring",
      "Fixed issues reported by the QA team",
      "Directly contacted clients, agreed on business requirements",
      "Clarified requirements for new features to maintain project consistency",
      "Managed the development team and provided new features",
    ],
    technologies: ["React", "TypeScript", "Redux", "Styled Components", "Jest", "Testing Library"],
  },
]

export default function MyExp() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

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
              My <span className="text-gradient">experience</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Professional journey that proves my <span className="text-blue-600 font-medium">value</span>
            </p>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>

            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-0" : "md:pl-12 md:ml-0 md:mr-auto"
                } md:w-1/2`}
              >
                <div
                  className={`absolute left-0 md:${index % 2 === 0 ? "left-0" : "right-0"} top-0 w-8 h-8 rounded-full bg-white border-4 border-${exp.color}-500 transform md:translate-x-${index % 2 === 0 ? "-100" : "0"} md:left-${index % 2 === 0 ? "0" : "100%"} md:-translate-x-1/2 z-10`}
                ></div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="ml-12 md:ml-0 bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div
                    className={`p-6 cursor-pointer bg-gradient-to-r ${
                      exp.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : exp.color === "purple"
                          ? "from-purple-500 to-purple-600"
                          : "from-indigo-500 to-indigo-600"
                    } text-white`}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          <FaBriefcase />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          <h4 className="text-lg">{exp.company}</h4>
                        </div>
                      </div>
                      <div>{expandedId === exp.id ? <FaChevronUp /> : <FaChevronDown />}</div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: expandedId === exp.id ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <FaCalendarAlt className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaMapMarkerAlt className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <article className="text-left">
                      <h5 className="font-semibold text-gray-800 mb-2">Responsibilities:</h5>
                      <ul className="list-disc pl-5 mb-4 text-gray-700">
                        {exp.duties.map((duty, i) => (
                          <li key={i} className="mb-1">
                            {duty}
                          </li>
                        ))}
                      </ul>
                      </article>

                      <article className="text-left">
                      <h5 className="font-semibold text-gray-800 mb-2">Technologies:</h5>
                      <div className="flex justify-center flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-sm ${
                              exp.color === "blue"
                                ? "bg-blue-100 text-blue-700"
                                : exp.color === "purple"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-indigo-100 text-indigo-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      </article>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

