"use client"

import { motion } from "framer-motion"
import {
  FaClipboardCheck,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaHeadset,
  FaLaptopCode,
  FaUsers,
  FaUserCog,
  FaMobileAlt,
} from "react-icons/fa"
import Link from "next/link"

const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "Needs Assessment & Requirement Gathering",
    description:
      "I begin by understanding your business goals and technical needs to define the right solution—whether it's a website, web application, or mobile app.",
    icon: <FaClipboardCheck className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Design Proposal & UX/UI Planning",
    description:
      "I prepare a tailored design concept aligned with your objectives and industry standards, focusing on usability and aesthetics.",
    icon: <FaPencilRuler className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Iterative Development with Full Transparency",
    description:
      "The development process is fully transparent, with the ability to preview and provide feedback at every stage.",
    icon: <FaCode className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Testing & Optimization",
    description:
      "I conduct thorough testing to ensure performance, stability, and scalability—refining the product before launch.",
    icon: <FaCheckCircle className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Product Release",
    description: "The final product is delivered, deployed, and ready to bring value to your business.",
    icon: <FaRocket className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "Post-Launch Technical Support",
    description:
      "I offer continued support to ensure long-term success, updates, and smooth operation beyond the development phase.",
    icon: <FaHeadset className="h-6 w-6" />,
  },
]

const BUSINESS_SERVICES = [
  {
    title: "Web Application Development",
    description:
      "Custom web applications tailored to your business needs, from internal tools to customer-facing platforms.",
    icon: <FaLaptopCode className="h-12 w-12 text-blue-500" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Seamless integration with your existing development team, providing frontend expertise and support for complex projects.",
    icon: <FaUsers className="h-12 w-12 text-purple-500" />,
  },
  {
    title: "Consulting & Strategy",
    description:
      "Technical consulting on frontend architecture, performance optimization, and technology selection for your projects.",
    icon: <FaUserCog className="h-12 w-12 text-blue-500" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications that deliver native-like experiences while maintaining a single codebase for efficiency.",
    icon: <FaMobileAlt className="h-12 w-12 text-purple-500" />,
  },
]

export default function ForBusiness() {
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
              Solutions for <span className="text-gradient">Business</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Professional development services tailored to your{" "}
              <span className="text-blue-600 font-medium">business needs</span>
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
              I provide comprehensive development solutions for businesses of all sizes. Whether you need a new web
              application, mobile app, or technical expertise for your team, I deliver high-quality results that align
              with your business goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Services for Business</h2>
            <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions to help your business grow and succeed
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {BUSINESS_SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">My Workflow for Business Clients</h2>
            <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure successful project delivery
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>

              {WORKFLOW_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-6 flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center transform -translate-x-1/2 z-10 text-lg font-bold text-blue-600">
                    {step.id}
                  </div>

                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-20px)] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-2 text-blue-600">
                        {step.icon}
                        <h3 className="ml-3 text-lg font-semibold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to discuss your project?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Let's collaborate to create a solution that meets your business needs and exceeds your expectations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-lg transition-all hover:bg-blue-50"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

