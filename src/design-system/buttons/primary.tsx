import type { ButtonProps } from "./type"

export const PrimaryButton = ({ text, icon, href, size = "normal", ...props }: ButtonProps) => {
  const sizeClasses = {
    normal: "px-6 py-3",
    small: "px-3 py-2",
  }
  return (
    <a
      href={href}
      className={`inline-block rounded-lg bg-blue-600 font-medium text-white transition duration-200 hover:bg-blue-700 ${sizeClasses[size]}`}
      {...props}
    >
      {icon && icon}
      {text}
    </a>
  )
}

