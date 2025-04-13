"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function GallerySection() {
  const { t, dir } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k9VANxVKwBHh3N1KjVuzpowOprgmp4.png",
      alt: "Luxury hotel room with city night view",
      titleKey: "luxuryRoom",
      descriptionKey: "luxuryRoomDesc",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0NAUTQHutVpoL3f3SMpejPwlptdoeH.png",
      alt: "Elegant hotel room with wooden ceiling and ambient lighting",
      titleKey: "elegantRoom",
      descriptionKey: "elegantRoomDesc",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-67Tz9P22no4StSUPR7NLIWV2Thjj9O.png",
      alt: "Contemporary Asian-inspired hotel room with plants",
      titleKey: "asianRoom",
      descriptionKey: "asianRoomDesc",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iFRPCQt1aL0kFO9YF7kE5MJqkKTm4c.png",
      alt: "Modern architectural building with wavy balconies",
      titleKey: "distinctiveArchitecture",
      descriptionKey: "distinctiveDesc",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ocxKUymY3UCoONfrOQsG1pAm8tZe5S.png",
      alt: "Luxury living room with LED lighting",
      titleKey: "smartLiving",
      descriptionKey: "smartLivingDesc",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sbVoaonqTx67pif5M249Gto7h2yKK7.png",
      alt: "High-tech bathroom with smart features",
      titleKey: "intelligentBathroom",
      descriptionKey: "intelligentBathroomDesc",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lNncO8Y6AkTE0qrld64iQQhpc0HiKF.png",
      alt: "Luxury shower with gold accents",
      titleKey: "premiumShower",
      descriptionKey: "premiumShowerDesc",
    },
  ]

  return (
    <section id="gallery" className="bg-[#0a1622] py-24" dir={dir()}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-amber-500 text-sm tracking-widest mb-4">{t("ourGallery")}</h2>
          <h3 className="text-white text-4xl md:text-5xl font-light" style={{ fontFamily: "var(--font-serif, serif)" }}>
            {t("architecturalExcellence")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group aspect-[3/4] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

              <motion.div
                className="absolute inset-0 z-0"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden">
                  <motion.h4
                    className="text-white text-2xl mb-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100"
                    style={{ fontFamily: "var(--font-serif, serif)" }}
                  >
                    {t(image.titleKey)}
                  </motion.h4>
                </div>
                <div className="overflow-hidden">
                  <motion.p className="text-white/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {t(image.descriptionKey)}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
