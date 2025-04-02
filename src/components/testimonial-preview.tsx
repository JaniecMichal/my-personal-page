"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa"

export const TestimonialPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">What People Say</h2>
          <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl bg-white p-8 shadow-xl">
            <div className="absolute -left-3 -top-3 text-blue-500 opacity-20">
              <FaQuoteLeft size={48} />
            </div>

            <div className="relative z-10">
              <p className="mb-6 text-lg italic text-gray-700">
                "Michał is an exceptional frontend developer who consistently delivers high-quality code. His expertise
                in React and Next.js is impressive, and his ability to solve complex problems makes him an invaluable
                asset to any team. Working with him has been a pleasure!"
              </p>

              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Testimonial author"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Anna Nowak</h4>
                  <p className="text-sm text-gray-600">Project Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Read more testimonials
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

