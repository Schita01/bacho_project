"use client"

import { useState } from "react"
import MainMenu from "./main-menu"

export default function MenuButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Handle animation states
  const toggleMenu = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setIsMenuOpen(!isMenuOpen)

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 800)
  }

  return (
    <>
      <button
        className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex flex-col items-center justify-center gap-2 group transition-transform duration-300 ${
          isMenuOpen ? "scale-0" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleMenu}
        aria-label="Open menu"
        disabled={isAnimating}
      >
        <span
          className={`w-6 h-[1px] bg-white transform transition-all duration-300 ${
            isHovered ? "translate-y-[1px] w-8" : ""
          }`}
        />
        <span
          className={`w-6 h-[1px] bg-white transform transition-all duration-300 ${
            isHovered ? "-translate-y-[1px] w-4" : ""
          }`}
        />
      </button>

      <MainMenu
        isOpen={isMenuOpen}
        onClose={() => {
          if (!isAnimating) {
            setIsAnimating(true)
            setIsMenuOpen(false)
            setTimeout(() => setIsAnimating(false), 800)
          }
        }}
      />
    </>
  )
}
