"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

type FAQItem = {
  questionKey: string
  answerKey: string
}

type FAQCategory = {
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
      titleKey: "generalQuestions",
      items: [
        {
          questionKey: "whatIsVerticalCapital",
          answerKey: "whatIsVerticalCapitalAnswer",
        },
        {
          questionKey: "whoManagesHotel",
          answerKey: "whoManagesHotelAnswer",
        },
        {
          questionKey: "benefitsOfInvesting",
          answerKey: "benefitsOfInvestingAnswer",
        },
      ],
    },
    {
      titleKey: "investmentFinancials",
      items: [
        {
          questionKey: "investmentCost",
          answerKey: "investmentCostAnswer",
        },
        {
          questionKey: "howToReceiveReturns",
          answerKey: "howToReceiveReturnsAnswer",
        },
        {
          questionKey: "isInvestmentSecured",
          answerKey: "isInvestmentSecuredAnswer",
        },
        {
          questionKey: "canSellBeforeFiveYears",
          answerKey: "canSellBeforeFiveYearsAnswer",
        },
      ],
    },
    {
      titleKey: "legalOwnership",
      items: [
        {
          questionKey: "legalOwnershipQuestion",
          answerKey: "legalOwnershipAnswer",
        },
        {
          questionKey: "taxesAndFees",
          answerKey: "taxesAndFeesAnswer",
        },
        {
          questionKey: "afterFiveYears",
          answerKey: "afterFiveYearsAnswer",
        },
      ],
    },
    {
      titleKey: "bookingContact",
      items: [
        {
          questionKey: "howToBook",
          answerKey: "howToBookAnswer",
        },
        {
          questionKey: "canVisitBeforeInvesting",
          answerKey: "canVisitBeforeInvestingAnswer",
        },
      ],
    },
  ]

  // Helper function to render answer content
  const renderAnswer = (answerKey: string) => {
    const answer = t(answerKey)

    // Check if the answer contains bullet points (indicated by • character)
    if (answer.includes("•")) {
      const points = answer.split("•").filter((point) => point.trim().length > 0)

      return (
        <ul className="list-none space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>{point.trim()}</span>
            </li>
          ))}
        </ul>
      )
    }

    return <p>{answer}</p>
  }

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
                        <span className="text-white text-base md:text-lg font-medium">{t(item.questionKey)}</span>
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
                            <div className="p-4 md:p-6 pt-0 md:pt-0 text-white/70">{renderAnswer(item.answerKey)}</div>
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
