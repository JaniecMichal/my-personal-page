import type { ButtonProps } from "./type"

export const SecondaryButton = ({ text, icon, href, size = "normal", ...props }: ButtonProps) => {
  const sizeClasses = {
    normal: "px-6 py-3",
    small: "px-3 py-2",
  }
  return (
    <a
      href={href}
      className={`inline-block rounded-lg border border-gray-300 bg-gray-300 font-medium text-gray-600 transition duration-200 hover:border-gray-400 hover:bg-gray-300 ${sizeClasses[size]}`}
      {...props}
    >
      {icon && icon}
      {text}
    </a>
  )
}

