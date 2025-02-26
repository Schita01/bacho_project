"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

const videos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250224-1937-50.0453518-w2JGz0X2syT8J9aDRDFYKfUYefEKy6.mp4",
    title: "GeoInvest Luxury Property",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250224-1946-19.9003414-jAOEeH5gDNkAGaHh3ByOEgXes66QCv.mp4",
    title: "GeoInvest Exclusive Offer",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250224-1948-30.8461404-DHUR4Onlm6Nf6PpIk8JJTvuYDZVxnI.mp4",
    title: "GeoInvest Premium Experience",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250224-1950-55.7630807-GHbyVXtLueOIXIDUyTVBtluRjpyLzM.mp4",
    title: "GeoInvest Investment Showcase",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250224-1954-27.1791212-KB1De073JIjpSpbTu5wbrpTIuwm3SZ.mp4",
    title: "GeoInvest Luxury Living",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250224-1956-08.2588923-z9nLGzjRS8ADc9C2WFAU0K8Ejl2rOc.mp4",
    title: "GeoInvest Elite Residences",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250224-1959-20.5199836-8Z060ea9xxFVjZF0Qj3whEwprpUp1K.mp4",
    title: "GeoInvest Prime Location",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250224-2000-07.1736045-akcgZp48uppRdcxjQ61R2Uy8YyaH94.mp4",
    title: "GeoInvest Exclusive Amenities",
  },
]

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="relative aspect-video">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <video
                id={`video-${currentIndex}`}
                src={videos[currentIndex].src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-y-0 left-4 right-4 flex justify-between items-center pointer-events-none">
            <button
              onClick={handlePrev}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors pointer-events-auto"
              aria-label="Previous video"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors pointer-events-auto"
              aria-label="Next video"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

