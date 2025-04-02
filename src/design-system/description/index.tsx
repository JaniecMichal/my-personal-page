import type React from "react"
export const Description = ({ children }: { children: React.ReactNode }) => {
  return <p className="mb-6 text-xl font-normal text-gray-800 md:text-2xl">{children}</p>
}

