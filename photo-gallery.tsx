"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const photos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y46N2v3VZZRbZpXFDe4JaDMTSnclNd.png",
    alt: "Modern building exterior with wave-like balconies",
    title: "თანამედროვე არქიტექტურა",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lyGF9zAbo0XrkrGX8T4oQK94Cz6Vev.png",
    alt: "Futuristic room with blue LED lighting",
    title: "მომავლის დიზაინი",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0cp4V6HyoPeHWYwYvrZECCxW6KYgrd.png",
    alt: "Bedroom with LED star ceiling",
    title: "ვარსკვლავებიანი ჭერი",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5sazeeIjwd03VC4BJ1noAnQMGH7Eub.png",
    alt: "High-tech smart bathroom",
    title: "სმარტ სააბაზანო",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-np9vALZrYwJTMwmKBjiTtIkkB7iDAD.png",
    alt: "Modern shower with digital controls",
    title: "ციფრული საშხაპე",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sNzW4WMff1yI2QEB3uJ2mILDcbmulK.png",
    alt: "Modern lounge with suspended fireplace",
    title: "თანამედროვე დასასვენებელი",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-leOcgW3VMZRAPwSkQE0C15yFLvn6gh.png",
    alt: "Architectural detail of wave-like balconies",
    title: "არქიტექტურული დეტალები",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2CQTS9OyRwthQy5moqGOnL0ccZqhwp.png",
    alt: "Modern living room with LED lighting",
    title: "მისაღები ოთახი",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KLB4UGyGJqjAED5auVm3xZ2289QOlW.png",
    alt: "Contemporary bedroom with mirror wall",
    title: "საძინებელი",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vhQ2dnH3G5AmAU3HkeNkEzOF9R8RI7.png",
    alt: "Luxury bathroom with panoramic views",
    title: "პანორამული სააბაზანო",
  },
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="bg-black py-12 border-t-[3px] border-t-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-12 text-white">სასტუმროს გალერეა</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  {photo.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-5xl w-full aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={photos[selectedImage].src || "/placeholder.svg"}
                  alt={photos[selectedImage].alt}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                  <span className="sr-only">დახურვა</span>
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                  <h3 className="text-xl font-light">{photos[selectedImage].title}</h3>
                  <p className="text-sm text-gray-300">{photos[selectedImage].alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

