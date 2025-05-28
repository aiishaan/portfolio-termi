"use client"

import { useState, useEffect } from "react"

interface TextScrambleProps {
  text: string
  className?: string
}

export const TextScramble = ({ text, className = "" }: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState("")
  const characters = "!<>-_\\/[]{}—=+*^?#_~"

  useEffect(() => {
    let iteration = 0
    const frames = 20
    const finalText = text

    // Initial delay before starting animation
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(
          finalText
            .split("")
            .map((letter, index) => {
              // If the iteration is past this letter's reveal point, show the actual letter
              if (index < iteration) {
                return finalText[index]
              }

              // Otherwise show a random character
              if (letter === " ") return " "
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join(""),
        )

        // Increase iteration to reveal one more letter
        if (iteration >= finalText.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3 // Slow down the reveal
      }, 30)

      return () => {
        clearInterval(interval)
      }
    }, 500) // Wait 500ms before starting

    return () => clearTimeout(initialDelay)
  }, [text])

  return <span className={className}>{displayText}</span>
}
