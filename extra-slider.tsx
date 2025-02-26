"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sliderItems = [
  {
    number: "01",
    title: "საინვესტიციო შეთავაზება",
    description:
      "ეძებთ უსაფრთხო, 100% -ით დაცულ და მაღალშემოსავლიან ინვესტიციას? კომპანია Geoinvest-ი გაძლევთ შესაძლებლობას განახორციელოთ ინვესტიცია ექსკლუზიურ ძვირადღირებულ სასტუმროს ნომრებში განსაკუთრებული საინვესტიციო პირობებით რომლსაც ანაოლგი არ გააჩნია საქართველოს უძრავი ქ���ნების სიანვესტიციო ბაზარზე.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qcATWQF1CAHVT4hjgLLtuURkDoLccj.png",
  },
  {
    number: "02",
    title: "საინვესტიციო პირობები",
    description:
      "სასტუმროს ნომრის ღირებულება შეადგენს 150,000$.\nსაბანკო გარანტიით დაცული ფიქსირებული 12,000$.\nსაინვესტიციო სარგებლის მიღება ყოველთვიურად 1000$.\nსასტუმროს ნომრის გარანტირებული გამოსყიდვა 5 წელიწადში 150,000$",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0BFLraHEw5oaCJUKxUQdsGt5iiDCIP.png",
  },
  {
    number: "03",
    title: "100% დაზღვევა და გადასახადები",
    description:
      "საინევსტიციო სასტუმრო ნომრების 100% იანი დაზღვევა ნებისმიერი სახის დაზიანებისგან.\nსასტუმროს ნომრის მფლობელი გათავისუფლებულია ნებისიმიერი სახის გადასახადისგან და 100%-ით ინარჩუნებს საინვესტიციო მოგებას",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cg0pvYiee7ny0aVBDP9HixWJAbuk8Z.png",
  },
  {
    number: "04",
    title: "მართვა და საერთაშორისო შესაძლებლობები",
    description:
      "სასტუმროს მართვას განახორციელებს კომპანიის გამოცდილი გუნდი, საერთაშორისო სტანდარტების შესაბამისად.\nგანსაკუთრებული შესაძლებლობები უცხოელი ინვესტორებისთვის. 5 წლიანი ბინადრობის უფლება ოჯახის წევრებთან ერთად და ევროპაში უვიზო მიმოსვლა",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e5N6rS2t0E0TLLEJLQEEgV4CfYVriP.png",
  },
]

export default function ExtraSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length)
  }

  return (
    <>
      <section className="bg-black min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12 h-full">
          <div className="w-full h-full flex flex-col">
            <div className="relative h-[60vh] w-full overflow-hidden rounded-lg">
              <Image
                src={sliderItems[currentIndex].image || "/placeholder.svg"}
                alt={`Slide ${currentIndex + 1}`}
                layout="fill"
                objectFit="cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="transition-transform duration-300 hover:scale-105"
              />
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition-colors z-10"
              >
                <ArrowLeft className="w-8 h-8" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition-colors z-10"
              >
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>

            <div className="space-y-6 text-white flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {sliderItems[currentIndex].title && (
                  <motion.h2
                    key={`title-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-white text-2xl sm:text-3xl md:text-4xl font-light pt-5"
                  >
                    {sliderItems[currentIndex].title}
                  </motion.h2>
                )}
                <motion.p
                  key={`desc-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-white text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line"
                >
                  {sliderItems[currentIndex].description}
                </motion.p>
              </AnimatePresence>
              <div className="flex items-center justify-between">
                <div className="text-white text-sm">არჩევა {sliderItems[currentIndex].number}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

