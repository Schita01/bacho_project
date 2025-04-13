"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Award, Building, CheckCircle } from "lucide-react"

export default function CTASection() {
  const { t, dir, language } = useLanguage()

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Geoinvests",
    description: t("aboutProjectDesc1") + " " + t("aboutProjectDesc2"),
    image:
      "https://sjc.microlink.io/LsBZlvaJGNapQvPqhRIGHoOmJQFbgJifkSKHqhDbcI_zf8Ve4cQnJ2n8ejUz8Jix9oP7RvJSBpWNmM6lJliqDw.jpeg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tbilisi",
      addressCountry: "Georgia",
    },
    telephone: "+995 599236464",
    email: "geoinvests.com@gmail.com",
  }

  return (
    <section id="about" className="relative w-full overflow-hidden" dir={dir()} aria-label={t("aboutProject")}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://sjc.microlink.io/LsBZlvaJGNapQvPqhRIGHoOmJQFbgJifkSKHqhDbcI_zf8Ve4cQnJ2n8ejUz8Jix9oP7RvJSBpWNmM6lJliqDw.jpeg"
          alt={t("aboutProject")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <article className="relative z-10 flex flex-col items-center justify-center px-4 text-center py-16">
        <header>
          <div className="inline-block bg-amber-500 text-white px-4 py-1 mb-4 rounded-sm">
            <span className="text-sm font-semibold tracking-wider">AWARD-WINNING PROJECT</span>
          </div>
          <h2
            className="text-white text-3xl md:text-4xl font-light mb-6"
            style={{ fontFamily: "var(--font-serif, serif)" }}
          >
            {t("aboutProject")}
          </h2>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white text-base md:text-lg font-light max-w-4xl mx-auto"
        >
          <p className="mb-4" lang={language.toLowerCase()}>
            {t("aboutProjectDesc1")}
          </p>
          <p className="mb-8" lang={language.toLowerCase()}>
            {t("aboutProjectDesc2")}
          </p>
        </motion.div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <motion.div
            className="flex flex-col items-center bg-black/30 backdrop-blur-sm p-4 rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Award className="text-amber-500 w-10 h-10 mb-3" />
            <h3 className="text-white text-lg mb-2">Award-Winning</h3>
            <p className="text-white/70 text-sm">Recognized by United Nations and European Union</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-black/30 backdrop-blur-sm p-4 rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Building className="text-amber-500 w-10 h-10 mb-3" />
            <h3 className="text-white text-lg mb-2">Premium Location</h3>
            <p className="text-white/70 text-sm">Located in the most expensive area of Old Tbilisi</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-black/30 backdrop-blur-sm p-4 rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="text-amber-500 w-10 h-10 mb-3" />
            <h3 className="text-white text-lg mb-2">Guaranteed ROI</h3>
            <p className="text-white/70 text-sm">10% annual return on investment</p>
          </motion.div>
        </div>
      </article>
    </section>
  )
}
