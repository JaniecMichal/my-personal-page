"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/components/contact-form"
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.08),transparent)]" />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Get in <span className="text-gradient">touch</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss your <span className="text-blue-600 font-medium">project or opportunity</span>
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
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to contact me using the form below, and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:michal.janiec95@gmail.com"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                michal.janiec95@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Katowice, Poland</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <FaLinkedin size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/janiecmichal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Connect with me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

