"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Word {
  text: string
  className?: string
}

interface TypewriterEffectProps {
  words: Word[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({ words, className = "", cursorClassName = "bg-blue-500" }: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex].text

    const timeout = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster when deleting

        // If deleted completely, move to next word
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
          setTypingSpeed(150)
        }
      }
      // If typing
      else {
        setCurrentText(word.substring(0, currentText.length + 1))

        // If typed completely, pause then delete
        if (currentText.length === word.length) {
          setTypingSpeed(1500) // Pause at the end
          setTimeout(() => {
            setIsDeleting(true)
            setTypingSpeed(50)
          }, 1500)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-blue-600 font-bold"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <span className={`ml-1 inline-block h-6 w-[3px] animate-blink ${cursorClassName}`}></span>
    </div>
  )
}

