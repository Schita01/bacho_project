"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const showcaseItems = [
  {
    number: "01",
    title: "საწოლი 12,000$",
    description: "მასაჟორებით და პროექტორით აღჭურვილი საწოლი",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4dbuv85wfX8DtjEa4nZkdcFY45AxeG.png",
  },
  {
    number: "02",
    title: "კარები 7,000$",
    description: "ულტრათანამედროვე ტექნოლოგიებით აღჭურვილი კარები, სახის ამომცნობი ფუნქციით, დისპლეითა და კამერით",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iN8CMF62gXMXff1UfZbZCm1yjoODQ9.png",
  },
  {
    number: "03",
    title: "სავარძელი 5,000$",
    description: "მაღალტექნოლოგიური სამუშაო სავარძელი 28 სახის მასაჟორის ფუნქციით",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s0MC3LfY1dJT4e0RWbLiu0QLsZ3PCR.png",
  },
  {
    number: "04",
    title: "ჭერი 7,000$",
    description: "ბარისოლის 650 განათების წერტილით და მთვარით",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X8HOjETyysejJctJKUAhJYbcCVsorE.png",
  },
  {
    number: "05",
    title: "იატაკი 128$ 1 კვმ",
    description: "ატლას კონკორდი რ 11 ის ფილა",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dN8u56GDKKWgLTiQF8NHzT6qrItvvF.png",
  },
  {
    number: "06",
    title: "ფანჯრები 460$ 1კვმ",
    description: "უმაღლესი ხარისხის ფანჯრები, ალუმინის 120-იანი პროფილით, სპეცფერით და ენერგოეფექტური მინებით",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uo3PF3b3ubxaFUDbXmmjNicZOwTV2b.png",
  },
  {
    number: "07",
    title: "საშხაპე 2,000$",
    description:
      "ულტრათანამედროვე საშხაპე, რომელიც უზრუნველყოფილია მაღალტექნოლოგიური ფუნქციებით, დისტანციური მართვით, ავტომატური კონტროლით და სხვა მრავალი კომფორტული მახასიათებლებით",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-50T9GpEKu42UCGqO2VQUBSv7jIsy7Z.png",
  },
  {
    number: "08",
    title: "აბაზანის სარკე 2,000$",
    description:
      "ჭკვიანი აბაზანის სარკე, რომელიც აჩვენებს გარე და შიდა ტემპერატურას, დროს, ამინდს. შესაძლებელია სოციალურ ქსელებითა და YouTube-ით სარგებლობა და სხვა მრავალი ფუნქციის გამოყენება",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KFmcvtlAMQzMW4eXfWaLjomDdpgFFW.png",
  },
  {
    number: "09",
    title: "ონკანი 400$",
    description:
      "სენსორებიანი ჭკვიანი ონკანი რომელიც უზრუნველყოფს დახარჯული წყლის ზუსტ აღრიცხვას, ტემპერატურის ავტომატურ კონტროლს და ციფრულ ფორმატში წყლის ტემპერატურის ზუსტ ჩვენებას დისპლეიზე",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zwbd18kSGZx8XCXhbEhA65XktJbfly.png",
  },
  {
    number: "10",
    title: "ტუალეტი 9,000$",
    description:
      "ელეგანტური დიზაინი, ავტომატური პულტზე ამწევი სახურავი, სავარძლის გათბობა-გაგრილება, დისტანციური მართვის ბიდე, ავტომატური რეცხვა და სხვა მრავალი ფუნქცია",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rWtS6AoQVYgb6v7Q5WOA83W2g6LKgs.png",
  },
  {
    number: "11",
    title: "ხელსაბანი 1,600$",
    description: "უმაღლესი ხარისხის ნიჯარა, რომელიც დამზადებულია ზუსტად იგივე მასალით რა მასალითაც გემებს ამზადებენ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LKz4jtAXiNtvmZkuowm4vN5bgCQN2P.png",
  },
  {
    number: "12",
    title: "კედელი 134$ 1კვმ",
    description: "უმაღლესი ხარისხის მარმარილოს კედელი",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YA9MLkx69kZG5IFx7bTSJxGD1P55Tc.png",
  },
  {
    number: "13",
    title: "ყავის აპარატი 700$",
    description: "მაქსიმალური კომფორტისთვის ყველა ნომერში განთავსდება მაღალი ხარისხის ყავის აპარატი",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5bB37zUeGPv4OumnZjfunNDfOX5rEk.png",
  },
  {
    number: "14",
    title: "სმარტ ტელევიზორი 3,000$",
    description: "ულტრათანამედროვე ჭკვიანი ტელევიზორი განსაკუთრებული მაღალი ხარისხითა და უამრავი ფუნქციებით",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LH5eoWt0Ac6GEUh6x3LfV9p9j1b0IU.png",
  },
]

export default function LuxuryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextIndex = (currentIndex + 1) % showcaseItems.length

  const handleNext = () => {
    setCurrentIndex(nextIndex)
  }

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + showcaseItems.length) % showcaseItems.length)
  }

  return (
    <>
      <section className="bg-black">
        <div className="flex flex-col md:flex-row w-full min-h-screen">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 bg-black p-8 md:p-12 lg:p-24 flex flex-col">
            <div className="mb-auto">
              <button
                onClick={handlePrev}
                className="flex items-center text-white/60 hover:text-white mb-4 md:mb-8 group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm">უკან</span>
              </button>
              <div className="text-white/60 mb-2 md:mb-4 text-xs md:text-sm">
                არჩევა {showcaseItems[currentIndex].number}
              </div>
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {showcaseItems[currentIndex].title && (
                  <motion.h2
                    key={`title-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-white text-2xl md:text-3xl lg:text-4xl font-light mb-4"
                  >
                    {showcaseItems[currentIndex].number}. {showcaseItems[currentIndex].title}
                  </motion.h2>
                )}
                <motion.p
                  key={`desc-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-line"
                >
                  {showcaseItems[currentIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Panel - Image */}
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={showcaseItems[currentIndex].image || "/placeholder.svg"}
                  alt={showcaseItems[currentIndex].title || `Showcase image ${currentIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 bottom-4 md:top-1/2 md:-translate-y-1/2 text-white/60 hover:text-white transition-colors z-10"
            >
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

