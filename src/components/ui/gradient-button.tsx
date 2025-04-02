import Link from "next/link"
import type React from "react"

interface GradientButtonProps {
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

export const GradientButton = ({ href, children, icon, className = "" }: GradientButtonProps) => {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 text-sm font-medium text-white hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 ${className}`}
    >
      <span className="relative flex items-center rounded-md bg-blue-600 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
        {icon}
        {children}
      </span>
    </Link>
  )
}

