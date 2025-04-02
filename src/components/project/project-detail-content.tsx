"use client"

import { type ProjectType } from "@/src/api/projects"
import ProjectHeader from "./project-header"


export default function ProjectDetailContent({ project }: { project: ProjectType }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.08),transparent)]" />

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ProjectHeader project={project} />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
