"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function CTASection() {
  const { t, dir } = useLanguage()

  return (
    <section id="about" className="relative w-full overflow-hidden" dir={dir()}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://sjc.microlink.io/LsBZlvaJGNapQvPqhRIGHoOmJQFbgJifkSKHqhDbcI_zf8Ve4cQnJ2n8ejUz8Jix9oP7RvJSBpWNmM6lJliqDw.jpeg"
          alt="Modern architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white text-base md:text-lg font-light max-w-4xl mx-auto"
        >
          <p className="mb-4">{t("aboutProjectDesc1")}</p>
          <p>{t("aboutProjectDesc2")}</p>
        </motion.div>
      </div>
    </section>
  )
}

