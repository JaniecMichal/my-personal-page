"use client"
import { FaGithub, FaLinkedin, FaStrava } from "react-icons/fa"
import { IconContext } from "react-icons"

const SOCIALS = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/janiecmichal/",
    icon: <FaLinkedin />,
  },
  {
    id: "github",
    href: "https://github.com/JaniecMichal",
    icon: <FaGithub />,
  },
  {
    id: "strava",
    href: "https://www.strava.com/athletes/118375721",
    icon: <FaStrava />,
  },
]

export const Socials = ({ size = "32px" }) => {
  return (
    <IconContext.Provider value={{ size }}>
      <section className="mt-4 flex space-x-4 lg:mt-10">
        {SOCIALS.map((social) => (
          <a key={social.id} className="text-gray-600 hover:text-blue-500" href={social.href}>
            {social.icon}
          </a>
        ))}
      </section>
    </IconContext.Provider>
  )
}

