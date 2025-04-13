"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight, Leaf, Phone } from "lucide-react"
import Image from "next/image"
import MenuButton from "./menu-button"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSlider() {
  const { t, language, setLanguage, dir } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState("next")
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Add these new state variables after the existing useState declarations
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Define slides with translation keys
  const slides = [
    {
      id: "01",
      image: "https://www.sliderrevolution.com/wp-content/uploads/revslider/projects1/slide-1.jpg",
      titleKey: "exclusiveInvestment",
      subtitleKey: "luxuryInvestment",
      descriptionKey: "ownLuxury",
    },
    {
      id: "02",
      image: "https://www.sliderrevolution.com/wp-content/uploads/revslider/hero-3/hero2-video_4511.jpeg",
      titleKey: "secureInvestment",
      subtitleKey: "guaranteedReturns",
      descriptionKey: "roomPrice",
    },
    {
      id: "03",
      image: "https://www.sliderrevolution.com/wp-content/uploads/revslider/menu-1/slide-3.jpg",
      titleKey: "zeroExpense",
      subtitleKey: "hassleOwnership",
      descriptionKey: "fullyManaged",
    },
    {
      id: "04",
      image: "https://www.sliderrevolution.com/wp-content/uploads/revslider/projects-3/project21.jpg",
      titleKey: "limitedOpportunity",
      subtitleKey: "exclusiveOffer",
      descriptionKey: "contactUs",
    },
  ]

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setDirection("next")
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating, slides.length])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setDirection("prev")
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating, slides.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  // Handle scroll events for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to section when clicking on scroll indicator
  const scrollToContent = () => {
    const height = window.innerHeight
    window.scrollTo({
      top: height,
      behavior: "smooth",
    })
  }

  // Add these new functions after the existing functions but before the return statement
  // Handle touch start event
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(null)
  }

  // Handle touch move event
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  // Handle touch end event
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
      dir={dir()}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Add MenuButton component */}
      <MenuButton />

      {/* Language Selector */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 flex items-center bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
        {["EN", "RU", "AR", "GE"].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang as any)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              language === lang ? "bg-amber-500 text-white" : "text-white/70 hover:text-white"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Keep all existing elements */}
      <div className="absolute top-8 left-8 z-30">
        <Leaf className="w-10 h-10 text-amber-500" />
      </div>

      <div className="fixed top-8 right-8 z-50">
        <a
          href="https://wa.me/599236464"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors shadow-lg"
          aria-label="Call us on WhatsApp"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center cursor-pointer"
        onClick={scrollToContent}
      >
        <div className="w-[1px] h-24 bg-white/20"></div>
        <span className="text-white/60 text-xs mt-2 rotate-90">{t("scroll")}</span>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-800 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : direction === "next"
                ? index === (currentSlide + 1) % slides.length
                  ? "opacity-0 translate-x-full"
                  : "opacity-0 -translate-x-full"
                : index === (currentSlide - 1 + slides.length) % slides.length
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
          }`}
        >
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={t(slide.titleKey)}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 lg:px-32">
            <div className="max-w-3xl">
              <h3 className="text-amber-500 tracking-widest text-sm md:text-base mb-4 opacity-0 animate-fadeIn">
                {t(slide.subtitleKey)}
              </h3>
              <h1 className="text-white text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-light mb-8 opacity-0 animate-slideUp">
                {t(slide.titleKey)}
              </h1>
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#0a1622]/80 flex flex-col md:flex-row items-stretch">
            <div className="flex flex-col md:flex-row items-start md:items-center py-6 px-8 md:px-20 lg:px-32">
              <span className="text-amber-500 text-5xl md:text-7xl font-light mb-3 md:mb-0 md:mr-8">{slide.id}</span>
              <div className="text-white/70 max-w-md text-sm md:text-base whitespace-pre-line">
                {t(slide.descriptionKey)
                  .split("\n")
                  .map((line, i) => (
                    <p key={i} className="mb-0">
                      {line.split(". ").map((sentence, j) => {
                        if (!sentence.trim()) return null
                        return (
                          <span key={j} className="inline-block mb-1">
                            <span className="text-amber-500 mr-1">•</span>
                            <span className="text-white hover:text-amber-500 transition-colors">
                              {sentence}
                              {j < line.split(". ").length - 1 && sentence.trim() ? "." : ""}
                            </span>
                            {j < line.split(". ").length - 1 && sentence.trim() && <span className="mr-2"></span>}
                          </span>
                        )
                      })}
                    </p>
                  ))}
              </div>
            </div>
            <div className="ml-auto flex">
              <button
                onClick={prevSlide}
                className="w-16 md:w-20 flex items-center justify-center border-l border-white/10 text-white/70 hover:bg-amber-500/20 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-16 md:w-20 flex items-center justify-center border-l border-white/10 text-white/70 hover:bg-amber-500/20 hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
