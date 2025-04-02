"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaMapMarkerAlt, FaLanguage, FaGraduationCap, FaRunning } from "react-icons/fa"
import profilePic from "../../src/assets/profile.jpg";


export default function About() {
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
              Something about <span className="text-gradient">me</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Frontend Developer with ReactJS and NextJS, ready for big challenges
            </p>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  👨‍🎓💻🖥 I'm an experienced and ambitious frontend developer with over 4 years of experience in the
                  industry. I thrive on writing clean, efficient code and have a proven track record of leading
                  development teams to success.
                </p>
                <p className="text-gray-700">
                  I'm passionate about delivering high-quality products and enthusiastically embrace new challenges to
                  continually expand my skill set. I love learning new things and being in the midst of the creative
                  storm where amazing interfaces and applications emerge – those that simplify and enhance everyday
                  life.
                </p>
                <p className="text-gray-700">
                  I'm currently seeking a stimulating environment where I can utilize my skills and grow as a developer.
                  I'm a loyal and reliable employee who takes my responsibilities seriously.
                </p>
                <p className="text-gray-700">
                  I enjoy staying active and participating in sports, which helps me develop the character and
                  discipline that are also essential in my work as a programmer. I recently completed a half marathon
                  and am constantly setting new goals to strive for.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-xl transform rotate-6"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={profilePic || "/placeholder.svg"}
                  alt="Michał Janiec - About me"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Personal Details</h2>
            <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  <FaMapMarkerAlt size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-700">Katowice, Poland</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                  <FaLanguage size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
              </div>
              <ul className="text-gray-700">
                <li>Polish (Native)</li>
                <li>English (Intermediate)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  <FaGraduationCap size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <p className="text-gray-700">Power Engineering</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                  <FaRunning size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Hobbies</h3>
              </div>
              <p className="text-gray-700">Running, Sports, Technology</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

