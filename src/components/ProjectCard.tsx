import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function ProjectCard() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
    },
  })
  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
    </div>
  )
}
