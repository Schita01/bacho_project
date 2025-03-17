"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

interface MainMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MainMenu({ isOpen, onClose }: MainMenuProps) {
  const { t, dir } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Control animation timing
  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    } else {
      const timer = setTimeout(() => {
        setMounted(false)
      }, 500) // Match this with the exit animation duration
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!mounted && !isOpen) return null

  // Handle smooth scrolling to sections
  const handleNavigation = (sectionId: string) => {
    onClose() // Close the menu first

    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      if (sectionId === "top") {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        // Scroll to the specified section
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }, 300)
  }

  const menuItems = [
    { name: "Home", delay: 100, section: "top" },
    { name: "About", delay: 150, section: "about" },
    { name: "Services", delay: 200, section: "services" },
    { name: "Projects", delay: 250, section: "gallery" },
    { name: "Contact", delay: 300, section: "contact" },
  ]

  const contactItems = [
    { icon: "+", text: t("phone"), delay: 400 },
    { icon: "@", text: t("email"), delay: 450 },
  ]

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-full bg-[#0a1622] z-50 transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-[10%] opacity-0"
        }`}
        dir={dir()}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-white/70 hover:text-white transition-all duration-300 transform ${
            isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
          style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
          aria-label="Close menu"
        >
          <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </button>

        <nav className="h-full flex flex-col justify-between p-8 sm:p-12 md:p-16">
          <ul className="space-y-5 sm:space-y-6 md:space-y-8 text-white mt-12 sm:mt-8 md:mt-0">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.section)}
                  className={`block text-left w-full text-3xl sm:text-4xl md:text-5xl font-light hover:text-amber-500 transition-all duration-500 transform ${
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    fontFamily: "var(--font-serif, serif)",
                    transitionDelay: isOpen ? `${item.delay}ms` : "0ms",
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="space-y-3 sm:space-y-4 text-white/70">
            {contactItems.map((item, index) => (
              <p
                key={index}
                className={`flex items-center gap-3 sm:gap-4 transition-all duration-500 transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? `${item.delay}ms` : "0ms" }}
              >
                <span className="text-amber-500">{item.icon}</span>
                <span className="tracking-widest text-sm sm:text-base">{item.text}</span>
              </p>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}

