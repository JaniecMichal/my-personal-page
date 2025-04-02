import type { HeadingProps } from "./types"

export const SmallHeading = ({ text }: HeadingProps) => {
  return <h2 className="md:text-md font-regular mb-4 text-xl text-gray-800 lg:text-2xl">{text}</h2>
}

