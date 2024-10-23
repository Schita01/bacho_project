import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SliceCarouselLifecycl from "../components/SliceCarouselLifecycl";
import RofsCard from "../components/RofsCard";
import { useLanguage } from "../context/LanguageContextType"; // Import useLanguage
import { Link } from "react-router-dom";


export default function Project() {
  const { selectedLanguage, setSelectedLanguage, languages } = useLanguage(); // Use the language context
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);
  const [second, setSecond] = useState(false);
  const [fourth, setFourth] = useState(false); // New state for the fourth button
  const [showCards, setShowCards] = useState(false); // Control the visibility
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);


  // Keen slider setup with duration and transition adjustments
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Automatic slide transition effect
  useEffect(() => {
    if (loaded && instanceRef.current) {
      const intervalId = setInterval(() => {
        if (currentSlide === 4) {
          instanceRef.current.moveToIdx(0); // Loop back to the first slide
        } else {
          instanceRef.current.next(); // Move to the next slide
        }
      }, 5000); // Change slide every 5 seconds (adjust this as needed)

      return () => clearInterval(intervalId); // Clean up interval on unmount
    }
  }, [loaded, currentSlide, instanceRef]);

  // Handle button clicks to show corresponding cards and scroll the page
  const handleButtonClick = (type: string) => {
    // Scroll the page
    window.scrollBy({
      top: 3200, // Scroll by 3200px
      left: 0,
      behavior: "smooth",
    });

    // Show the correct cards
        // Show the correct cards
        setShowCards(true);
        setFirst(type === "first");
        setLast(type === "last");
        setSecond(type === "second");
        setFourth(type === "fourth");
      };

  return (
    <section className="first_project_section">
      <button className="custom-button" type="button">
      <Link to={"/"}>
      <div className="button-bg" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="25px"
          width="25px"
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#fff"
          ></path>
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#fff"
          ></path>
        </svg>
      </div>
      </Link>
      <p className="button-text">Go Back</p>
    </button>
      {/* Slider */}
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-x1">
          <div className="container">
              <div className="project-slider-text-container">
                <span className="project-slider-span">მოგესალმებით ეს არის</span>
                <p className="project-slider-p">
                  გამარჯობა ეს არის სლაიდერის ტექსტი მოცემულია აქ ყველა <br /> ის სიტყვა რაც აყწერს თვითოეულს გამომდინარე
                  იქიდან თუ რა არის მასში
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-x2">
          <div className="container">
              <div className="project-slider-text-container">
                <span className="project-slider-span">მოგესალმებით ეს არის</span>
                <p className="project-slider-p">
                  გამარჯობა ეს არის სლაიდერის ტექსტი მოცემულია აქ ყველა <br /> ის სიტყვა რაც აყწერს თვითოეულს გამომდინარე
                  იქიდან თუ რა არის მასში
                </p>
              </div>
              </div>
          </div>
          <div className="keen-slider__slide number-x3">
          <div className="container">
              <div className="project-slider-text-container">
                <span className="project-slider-span">მოგესალმებით ეს არის</span>
                <p className="project-slider-p">
                  გამარჯობა ეს არის სლაიდერის ტექსტი მოცემულია აქ ყველა <br /> ის სიტყვა რაც აყწერს თვითოეულს გამომდინარე
                  იქიდან თუ რა არის მასში
                </p>
              </div>
              </div>
          </div>
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) => {
                e.stopPropagation();
                currentSlide === 4
                  ? instanceRef.current?.moveToIdx(0)
                  : instanceRef.current?.next();
              }}
              disabled={false}
            />
          </>
        )}
      </div>

      {/* Buttons */}
      <div className="btns_overlay">
        <div className="container">
          <div className="btns_overlay-container">
            <button
              onClick={() => {
                handleButtonClick("first");
                handleButtonClick("first");
              }}
              className="bulletin_overlay-btn"
            >
              {languages[selectedLanguage].BulletinKey}
            </button>
            <button onClick={() => handleButtonClick("last")} className="bulletin_overlay-btn">
              {languages[selectedLanguage].BulletinKey2}
            </button>
            <button onClick={() => handleButtonClick("second")} className="bulletin_overlay-btn">
              {languages[selectedLanguage].BulletinKey3}
            </button>
            <button
              onClick={() => handleButtonClick("fourth")} // New button for the fourth state
              className="bulletin_overlay-btn"
            >
              {languages[selectedLanguage].BulletinKey4}
            </button>
          </div>
        </div>
      </div>

      {/* Render Cards Based on Selection */}
      <section className={`SliceCarouselLifecycl_section ${showCards ? "slide-down" : "hidden"}`}>
        <div className="container">
          <div className="SliceCarouselLifecycl_container">
            <p className="SliceCarouselLifecycle_eyebrow__O_r1c text-eyebrow">Why Roofstock</p>
            <h2 className="SliceCarouselLifecycle_headline__sIvRj text-xl1">
              Our experience, <br /> available as a service
            </h2>
            <div className="SliceCarouselLifecycl_card-container">
              {first && (
                <>
                  <RofsCard />
                  <RofsCard />
                  <RofsCard />
                  <RofsCard />
                  <RofsCard />
                  <RofsCard />
                  <RofsCard />
                  <RofsCard />
                </>
              )}
              {last && (
                <>
                  <RofsCard />
                  <RofsCard />
                </>
              )}
              {second && (
                <>
                  <RofsCard />
                </>
              )},
              {fourth && (
                <>
                  <RofsCard /> {/* Render a single card for the fourth button */}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

// Arrow Component
function Arrow({
  disabled,
  left,
  onClick,
}: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const arrowClass = `arrow ${left ? "arrow--left" : "arrow--right"} ${disabled ? "arrow--disabled" : ""}`;

  return (
    <svg
      onClick={onClick}
      className={arrowClass}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
