"use client"

import { Mail, Phone, MessageCircle, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t, dir } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1622] text-white py-10 border-t border-white/10" dir={dir()}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center mb-6 md:mb-0"
          >
            <Leaf className="w-8 h-8 text-amber-500 mr-3" />
            <span className="text-xl font-light" style={{ fontFamily: "var(--font-serif, serif)" }}>
              Geoinvests
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
          >
            <a
              href="mailto:geoinvests.com@gmail.com"
              className="flex items-center gap-2 text-white/70 hover:text-amber-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{t("email")}</span>
            </a>

            <a
              href="tel:+995599236464"
              className="flex items-center gap-2 text-white/70 hover:text-amber-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{t("phone")}</span>
            </a>

            <a
              href="https://wa.me/599236464"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-green-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t("whatsapp")}</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-white/10 text-center text-white/50 text-sm"
        >
          © {currentYear} Geoinvests. {t("allRightsReserved")}
        </motion.div>
      </div>
    </footer>
  )
}

