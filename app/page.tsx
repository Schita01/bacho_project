import HeroSlider from "@/components/hero-slider"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <ServicesSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  )
}

