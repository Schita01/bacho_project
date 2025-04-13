"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

type FAQItem = {
  question: string
  answer: string | string[]
}

type FAQCategory = {
  title: string
  titleKey: string
  items: FAQItem[]
}

export default function FAQSection() {
  const { t, dir } = useLanguage()
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const faqCategories: FAQCategory[] = [
    {
      title: "General Questions",
      titleKey: "generalQuestions",
      items: [
        {
          question: "What is The Vertical Capital?",
          answer:
            "The Vertical Capital is a real estate investment company offering a unique opportunity to own a luxury hotel room in a 5-star hotel in Old Tbilisi, with guaranteed rental income.",
        },
        {
          question: "Who manages the hotel and the investment?",
          answer:
            "The hotel is managed under international hospitality standards, ensuring hassle-free ownership for investors.",
        },
        {
          question: "What are the benefits of investing in a hotel room?",
          answer: [
            "Guaranteed 10% ROI per year ($15,000 on a $150,000 investment).",
            "Fixed monthly payments secured by a top Georgian bank.",
            "A buyback option after 5 years.",
            "No operational involvement, taxes, or extra fees.",
          ],
        },
      ],
    },
    {
      title: "Investment & Financials",
      titleKey: "investmentFinancials",
      items: [
        {
          question: "How much does it cost to invest?",
          answer: "Each hotel room costs $150,000, with a guaranteed 10% annual ROI.",
        },
        {
          question: "How do I receive my returns?",
          answer: "Investors receive fixed monthly payments directly from the hotel's earnings.",
        },
        {
          question: "Is my investment secured?",
          answer:
            "Yes, payments are guaranteed by Georgia's largest bank, and investors have legal property ownership.",
        },
        {
          question: "Can I sell my investment before 5 years?",
          answer: "Yes, you can resell your hotel room at any time, or use the buyback option after 5 years.",
        },
      ],
    },
    {
      title: "Legal & Ownership",
      titleKey: "legalOwnership",
      items: [
        {
          question: "Will I own the hotel room legally?",
          answer:
            "Yes, after investing, you will receive an ownership certificate registered with the Ministry of Justice of Georgia.",
        },
        {
          question: "Do I need to pay any taxes or fees?",
          answer: "No, investors are exempt from operational fees, maintenance costs, and property taxes.",
        },
        {
          question: "What happens after 5 years?",
          answer: [
            "You can continue receiving rental income.",
            "Sell your hotel room to a new investor.",
            "Use the buyback option to get your investment back.",
          ],
        },
      ],
    },
    {
      title: "Booking & Contact",
      titleKey: "bookingContact",
      items: [
        {
          question: "How can I book a hotel room investment?",
          answer: [
            "To reserve a unit, please contact us:",
            "📩 Email: geoinvests.com@gmail.com",
            "📞 Phone: +995 599 236 464",
          ],
        },
        {
          question: "Can I visit the hotel before investing?",
          answer: "Yes! We welcome investors to visit the property in Old Tbilisi.",
        },
      ],
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0a1622]" dir={dir()}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-amber-500 text-sm tracking-widest mb-3 md:mb-4"
          >
            {t("faq")}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-light"
            style={{ fontFamily: "var(--font-serif, serif)" }}
          >
            {t("frequentlyAskedQuestions")}
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-white text-xl md:text-2xl mb-6 font-light"
                style={{ fontFamily: "var(--font-serif, serif)" }}
              >
                {t(category.titleKey)}
              </motion.h4>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const isOpen = openItems[`${categoryIndex}-${itemIndex}`] || false
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`border border-white/10 rounded-sm overflow-hidden transition-all duration-300 ${
                        isOpen ? "bg-white/5" : "bg-[#0a1622]"
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="flex justify-between items-center w-full p-4 md:p-6 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-white text-base md:text-lg font-medium">{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${
                            isOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 md:p-6 pt-0 md:pt-0 text-white/70">
                              {Array.isArray(item.answer) ? (
                                <ul className="list-none space-y-2">
                                  {item.answer.map((point, pointIndex) => (
                                    <li key={pointIndex} className="flex items-start">
                                      <span className="text-amber-500 mr-2">•</span>
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p>{item.answer}</p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
