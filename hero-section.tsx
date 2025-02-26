"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Montserrat } from "next/font/google"
import { Phone } from "lucide-react"
import ContentSection from "./content-section"
import FeaturesSection from "./features-section"
import LuxuryShowcase from "./luxury-showcase"
import AdditionalSlider from "./additional-slider"
import PhotoGallery from "./photo-gallery"
import VideoSlider from "./video-slider"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState("GE")
  const [activeVideo, setActiveVideo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev === 0 ? 1 : 0))
    }, 10000) // Switch every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const languages = ["GE", "RU", "EN", "AR"]

  const translations = {
    GE: {
      title: "GEOINVEST",
      subtitle: "სპეციალური საინვესტიციო შესაძლებლობები უძრავ ქონებაში",
      cta: "იხილეთ მეტი",
    },
    RU: {
      title: "GEOINVEST",
      subtitle: "Специальные инвестиционные возможности в недвижимости",
      cta: "Узнать больше",
    },
    EN: {
      title: "GEOINVEST",
      subtitle: "Special investment opportunities in real estate",
      cta: "Learn More",
    },
    AR: {
      title: "GEOINVEST",
      subtitle: "فرص استثمارية خاصة في العقارات",
      cta: "اعرف المزيد",
    },
  }

  const currentLang = translations[selectedLang]

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/995599236464`, "_blank")
  }

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 h-full w-full">
          <video
            key="video1"
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              activeVideo === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250225-2028-10.9001783-kLR3m4UCR2s2eVjSdthkeAMb0vA1B2.mp4"
              type="video/mp4"
            />
          </video>
          <video
            key="video2"
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              activeVideo === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250225-2028-56.1379303-MD4IbbsI9WxroNaWxoHtIMllFFuSjC.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-4 right-4 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110 hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-bounce"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
          <span className="absolute -inset-4 rounded-full border-2 border-blue-600 animate-[ping_1.5s_ease-out_infinite]"></span>
          <span className="absolute -inset-4 rounded-full border-2 border-blue-600 animate-[ping_2s_ease-out_infinite]"></span>
        </button>

        {/* Main Content */}
        <div
          className={`relative flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center ${montserrat.className}`}
        >
          {/* Language Selector */}
          <div className="absolute right-4 top-4 z-10">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center rounded-md bg-white/10 px-3 py-1.5 text-xs sm:text-sm text-white backdrop-blur-sm"
              >
                {selectedLang}
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-1 w-full overflow-hidden rounded-md border border-white/20 bg-black/80 backdrop-blur-md">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang)
                        setIsOpen(false)
                      }}
                      className={`block w-full px-3 py-1.5 text-xs sm:text-sm transition hover:bg-white/10
                        ${selectedLang === lang ? "bg-blue-500 text-white" : "text-gray-200"}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Image
            src="https://i.postimg.cc/rF4CPVdm/logox.png"
            alt="GeoInvest Logo"
            width={120}
            height={120}
            className="mb-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
          />
          <h1 className="mb-2 font-['Montserrat'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal uppercase text-[#f0f8ff] tracking-[0.1em] leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            {currentLang.title}
          </h1>
          <p className="mb-6 w-4/5 max-w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] text-[#f0f8ff] uppercase text-center leading-tight tracking-[0.08em]">
            {currentLang.subtitle}
          </p>
          <button
            onClick={() => {
              document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group relative overflow-hidden rounded-md bg-black/30 px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/40 hover:shadow-lg hover:shadow-blue-500/20 border-2 border-white/80"
          >
            <span className="relative z-10">{currentLang.cta}</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-white/5"></div>
          </button>
        </div>
      </div>
      <ContentSection />
      <FeaturesSection />
      <LuxuryShowcase />
      <AdditionalSlider />

      <VideoSlider />
      <PhotoGallery />
    </>
  )
}

