"use client"

import { motion } from "framer-motion"
import { FaUsers, FaUserCog, FaLaptopCode, FaMobileAlt } from "react-icons/fa"

const services = [
  {
    icon: <FaUsers className="h-12 w-12 text-blue-500" />,
    title: "Cross-Team Collaboration",
    description:
      "Working effectively with backend developers, designers, product managers, and business stakeholders to deliver cohesive solutions that meet all requirements.",
  },
  {
    icon: <FaUserCog className="h-12 w-12 text-purple-500" />,
    title: "Client-Focused Development",
    description:
      "Individual work with clients, adapting products to their specific needs and creating solutions that align perfectly with their brand identity and vision.",
  },
  {
    icon: <FaLaptopCode className="h-12 w-12 text-blue-500" />,
    title: "Web Development",
    description:
      "Creating responsive web applications, landing pages, and company websites with modern technologies that provide exceptional user experiences.",
  },
  {
    icon: <FaMobileAlt className="h-12 w-12 text-purple-500" />,
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications that deliver native-like experiences while maintaining a single codebase for efficiency.",
  },
]

export const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">My Services</h2>
          <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your specific needs
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
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
  )
}

