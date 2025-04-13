"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesSection() {
  const { t, dir } = useLanguage()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeCardMobile, setActiveCardMobile] = useState<number | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const services = [
    {
      id: 1,
      titleKey: "agreement",
      descriptionKey: "agreementDesc",
      image: "https://www.sliderrevolution.com/wp-content/uploads/revslider/services-3/service1.jpg",
    },
    {
      id: 2,
      titleKey: "registration",
      descriptionKey: "registrationDesc",
      image: "https://www.sliderrevolution.com/wp-content/uploads/revslider/services-3/hero2-video_431_layer.jpeg",
    },
    {
      id: 3,
      titleKey: "propertyOwner",
      descriptionKey: "propertyOwnerDesc",
      image: "https://www.sliderrevolution.com/wp-content/uploads/revslider/services-3/project31.jpg",
    },
  ]

  // Reset active card when switching between mobile and desktop
  useEffect(() => {
    setHoveredCard(null)
    setActiveCardMobile(null)
  }, [isMobile])

  // Handle card interaction based on device
  const handleCardInteraction = (id: number, isEntering: boolean) => {
    if (isMobile) {
      // On mobile, toggle the active card on click
      if (isEntering) {
        setActiveCardMobile(activeCardMobile === id ? null : id)
      }
    } else {
      // On desktop, use hover
      setHoveredCard(isEntering ? id : null)
    }
  }

  // Determine which card is active based on device
  const activeCard = isMobile ? activeCardMobile : hoveredCard

  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden" dir={dir()}>
      {/* Dark background */}
      <div className="absolute inset-0 bg-black z-[-2]"></div>

      {/* Animated background images */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            key={`bg-${activeCard}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 1.2, ease: "easeOut" },
            }}
            className="absolute inset-0 z-[-1]"
          >
            <Image
              src={services.find((s) => s.id === activeCard)?.image || "/placeholder.svg"}
              alt="Background"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/60 z-[-1]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-10 md:mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-amber-500 text-sm tracking-widest mb-3 md:mb-4"
          >
            {t("investmentProcess")}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-light"
            style={{ fontFamily: "var(--font-serif, serif)" }}
          >
            {t("reliableInvestment")}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`group relative overflow-hidden rounded-sm transition-all duration-500 ${
                activeCard === service.id ? "bg-amber-500/20 shadow-lg shadow-amber-500/10" : "bg-[#0a1622]/80"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => !isMobile && handleCardInteraction(service.id, true)}
              onMouseLeave={() => !isMobile && handleCardInteraction(service.id, false)}
              onClick={() => isMobile && handleCardInteraction(service.id, true)}
            >
              {/* Card content */}
              <div className="p-6 md:p-8 relative z-10 h-full flex flex-col min-h-[280px] md:min-h-[320px]">
                <motion.div
                  className="mb-3 md:mb-4"
                  initial={{ x: 0 }}
                  animate={{ x: activeCard === service.id ? 10 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-amber-500 text-4xl md:text-5xl font-light">0{service.id}</span>
                </motion.div>
                <motion.h4
                  className="text-white text-xl md:text-2xl mb-3 md:mb-4"
                  style={{ fontFamily: "var(--font-serif, serif)" }}
                  initial={{ x: 0 }}
                  animate={{ x: activeCard === service.id ? 10 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {t(service.titleKey)}
                </motion.h4>
                <motion.p
                  className="text-white/70 text-sm md:text-base mb-4 md:mb-6"
                  initial={{ x: 0 }}
                  animate={{ x: activeCard === service.id ? 10 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {t(service.descriptionKey)}
                </motion.p>
                <div className="mt-auto">
                  <motion.button
                    className="text-amber-500 hover:text-white transition-colors flex items-center gap-2 group text-sm md:text-base"
                    initial={{ x: 0 }}
                    animate={{ x: activeCard === service.id ? 10 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span
                      className={`h-[1px] bg-amber-500 group-hover:bg-white transition-all duration-300 ${
                        activeCard === service.id ? "w-8 md:w-10" : "w-5 md:w-6"
                      }`}
                    ></span>
                  </motion.button>
                </div>
              </div>

              {/* Mobile indicator for active card */}
              {isMobile && (
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-amber-500 transition-opacity duration-300 ${
                    activeCardMobile === service.id ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
