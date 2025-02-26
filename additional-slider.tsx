"use client"

import type React from "react"

import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sliderItems = [
  {
    number: "01",
    title: "მსოფლიო დონის Solar Energy Hotel Group",
    description:
      "პირველად საქართველოში წარმოგიდგენთ მსოფლიო დონის solar energy hotel group-ის ექსკლუზიურ საინვესტიციო სასტუმროს, რომელიც 8 სართულზე განლაგებულ პრემიალური კლასის 70 ნომერს მოიცავს. ინოვაცია, ფუფუნება, მსოფლიო სტანდარტების შესაბამისი უმაღლესი კლასი, ამ პროექტის ძირითადი დამახასიათებელი ნიშნებია.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5RHzrz0s8XFAAb6dILdjtgvuVhxHdf.png",
  },
  {
    number: "02",
    title: "განსაკუთრებული ადგილმდებარეობა",
    description:
      "სასტუმრო solar energy hotel თბილისის ყველაზე აქტიურ ზონაში ძველ თბილისში მდებარეობს და გამოირჩევა შთამბეჭდავი ხედებით. ამ ადგილზე არსებული უძრავი ქონება ყველაზე მაღალი და სტაბილურად მზარდი ფასებით გამოირჩევა საქართველოს უძრავი ქონების ბაზარზე და ხასიათდება ყველაზე მაღალი ტურისტული დატვირთულობით მთელი წლის მანძილზე.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I1sSCFl9bP76qnm9rK60e0beNhn6zj.png",
  },
  {
    number: "03",
    title: "უმაღლესი სამშენებლო ხარისხი",
    description:
      "Solar Energy Hotel არის კავკასიაში პირველი და ერთადერთი პროექტი, რომელსაც გააჩნია ევროპაში ყველაზე მაღალი სამშენებლო სტანდარტის, BREEAM-ის სერტიფიკატი.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5BTus2Y8sqKzgbfPs5YqV81ifgjrsB.png",
  },
  {
    number: "04",
    title: "მწვანე ეკონომიკის სერტიფიკატები",
    description:
      "Solar energy hotel არის პირველი პროექტი საქართველოში რომელსაც ოფიციალურად მიენიჭა გაერთიანებული ერების ორგანიზაციისა და ევროკავშირის სერთიფიკატები მწვანე ეკონომიკის მიმართულებით.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OoldhCI5w6yrVIP40eJ3v8srW223vU.png",
  },
  {
    number: "05",
    title: "თერმოიზოლაციური ნომრები",
    description:
      "სასტუმროს ნომრები დაპროექტებულია თერმოსის პრინციპით, რომელიც 100% ბლოკავს ნებისმიერი სიხშირის ხმას, რაც უზრუნველყოფს მაქსიმალურ სიმშვიდეს და კომფორტს.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iSTlNlHyOChugJ7EIk1ZdiuL48wGR6.png",
  },
  {
    number: "06",
    title: "სასტუმრო ხელოვნური ინტელექტით",
    description:
      "სოლარ ჰოტელი არის პირველი სასტუმრო საქართველოსა და ამიერკავკასიის მასშტაბით, სადაც პირველად განხორციელდა ხელოვნური ინტელექტის სრული ინტეგრაცია სასტუმროს მთელს ტერიტორიაზე და თითოეულ ნომერში. ხელოვნური ინტელექტის ინტეგრაციის ღირებულება თითოეულ ნომერზე 11,000$ შეადგენს.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4fPnkVNUPYgtzQbje2466LxcqsaeeN.png",
  },
  {
    number: "07",
    title: "100% ენერგოდამოუკიდებელი სასტუმრო",
    description:
      "Solar energy hotel არის პირველი 100%-ით ენერგოდამოუკიდებელი სასტუმრო საქართველოში რომელიც არ საჭიროებს ტრადიციულ ელექტროენერგიას და უზრუნველყოფილია უმაღლესი ხარისხის მზის ენერგიის სრულყოფილი სისტემით რომლის ჯამური ღირებულებაც 700,000$ შეადგენს.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sIeSEqzBiidUItSqiCD59Min5dNCxs.png",
  },
]

export default function AdditionalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const nextIndex = (currentIndex + 1) % sliderItems.length

  const handleNext = () => {
    setCurrentIndex(nextIndex)
  }

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + sliderItems.length) % sliderItems.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setTouchStart(touch.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return

    const touch = e.touches[0]
    const diff = touchStart - touch.clientX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
      setTouchStart(null)
    }
  }

  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row w-full min-h-[100vh]">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-black p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24 flex flex-col border-t-[3px] border-b-[3px] border-white">
          <div className="mb-auto">
            <button
              onClick={handlePrev}
              className="flex items-center text-white/60 hover:text-white mb-2 sm:mb-4 md:mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-xs sm:text-sm">უკან</span>
            </button>
            <div className="text-white/60 mb-2 md:mb-4 text-xs sm:text-sm">
              არჩევა {sliderItems[currentIndex].number}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-line"
              >
                {sliderItems[currentIndex].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div
          className="w-full md:w-1/2 relative h-[40vh] sm:h-[50vh] md:h-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 border-t-[3px] border-b-[3px] border-white">
                <Image
                  src={sliderItems[currentIndex].image || "/placeholder.svg"}
                  alt={sliderItems[currentIndex].title || `Slider image ${currentIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 md:right-8 bottom-4 md:top-1/2 md:-translate-y-1/2 text-white/60 hover:text-white transition-colors z-10"
          >
            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

