"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: string
  index: number
}

export const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 shadow-sm border border-blue-100"
    >
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
        {skill}
      </span>
    </motion.div>
  )
}

