import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import RofsCard from "../components/RofsCard";
import { useLanguage } from "../context/LanguageContextType"; // Import useLanguage
import { Link } from "react-router-dom";

export default function Project() {
  const { selectedLanguage, languages } = useLanguage(); // Use the language context
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);
  const [second, setSecond] = useState(false);
  const [fourth, setFourth] = useState(false); // New state for the fourth button
  const [showCards, setShowCards] = useState(false); // Control the visibility
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // const [ramdensDebs, setRamdensDebs] = useState();
  // const [ramdeniTvit, setRamdeniTvit] = useState();
  // const [anazgaurebisMigeba, setAnazgaurebisMigeba] = useState(); // 1 თვე
  // const [result, setResult] = useState(0);

  // const handleCalculation = () => {




    // პროცენტი წელზე 8% იგულისხმება
    // const yearlyPercentage = 8 / 100;
    // const monthsInYear = 12;

    // ერთ თვეში პროცენტი
    // const monthlyPercentage = yearlyPercentage / monthsInYear;

    // const calculation = (ramdensDebs * monthlyPercentage) * anazgaurebisMigeba;
    
    // setResult(calculation);
  // };

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
          instanceRef.current!.moveToIdx(0); // Loop back to the first slide
        } else {
          instanceRef.current!.next(); // Move to the next slide
        }
      }, 5000); // Change slide every 5 seconds (adjust this as needed)

      return () => clearInterval(intervalId); // Clean up interval on unmount
    }
  }, [loaded, currentSlide, instanceRef]);

  // Handle button clicks to show corresponding cards and scroll the page
  const handleButtonClick = (type: string) => {
    // Show the correct cards first
    setShowCards(true);
    setFirst(type === "first");
    setLast(type === "last");
    setSecond(type === "second");
    setFourth(type === "fourth");
  
    // Scroll the page after a slight delay to allow state updates to take effect
    setTimeout(() => {
      window.scrollBy({
        top: 3200, // Scroll by 3200px
        left: 0,
        behavior: "smooth",
      });
    }, 100); // Delay in milliseconds (adjust as necessary)
  };
  

  return (
    <section className="first_project_section">
        <Link to={"/"}>
      <button className="custom-button" type="button">
          <div className="button-bg">
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
        <p className="button-text">{languages[selectedLanguage].backPage}</p>
      </button>
        </Link>
      {/* Slider */}
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-x1">
            <div className="container">
              <div className="project-slider-text-container">
                <span className="project-slider-span">
                  მოგესალმებით ეს არის
                </span>
                <p className="project-slider-p">
                  გამარჯობა ეს არის სლაიდერის ტექსტი მოცემულია აქ ყველა <br />{" "}
                  ის სიტყვა რაც აყწერს თვითოეულს გამომდინარე იქიდან თუ რა არის
                  მასში
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-x2">
            <div className="container">
              <div className="project-slider-text-container">
                <span className="project-slider-span">
                  მოგესალმებით ეს არის
                </span>
                <p className="project-slider-p">
                  გამარჯობა ეს არის სლაიდერის ტექსტი მოცემულია აქ ყველა <br />{" "}
                  ის სიტყვა რაც აყწერს თვითოეულს გამომდინარე იქიდან თუ რა არის
                  მასში
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-x3">
            <div className="container">
              <div className="project-slider-text-container">
                <span className="project-slider-span">
                  მოგესალმებით ეს არის
                </span>
                <p className="project-slider-p">
                  გამარჯობა ეს არის სლაიდერის ტექსტი მოცემულია აქ ყველა <br />{" "}
                  ის სიტყვა რაც აყწერს თვითოეულს გამომდინარე იქიდან თუ რა არის
                  მასში
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
                handleButtonClick("first",);
              }}
              className="bulletin_overlay-btn"
            >
              {languages[selectedLanguage].BulletinKey}
            </button>
            <button
              onClick={() => handleButtonClick("last")}
              className="bulletin_overlay-btn"
            >
              {languages[selectedLanguage].BulletinKey2}
            </button>
            <button
              onClick={() => handleButtonClick("second")}
              className="bulletin_overlay-btn"
            >
              {languages[selectedLanguage].BulletinKey3}
            </button>
          
            {/* <div className="calculator">
            <span className="calculate-span">{languages[selectedLanguage].caluclateText}</span>
                <div className="calculator-container">
                <div className="calculator_menu-conatiner">

<div className="input-group">
<input
  type="number"
  value={ramdensDebs}
  onChange={(e) => setRamdensDebs(parseFloat(e.target.value))}
  className="input"
  name="თანხის რაოდენობა" 
  required 
/>

  <label className="user-label">{languages[selectedLanguage].AmountMoney}</label>
</div>

<div className="input-group">
  <input 
    required 
    type="number" 
    name="თვე" 
    autoComplete="off" 
    min="1" 
    className="input i-x1" 
    value={ramdeniTvit}
    onChange={(e) => setRamdeniTvit(parseFloat(e.target.value))}
    />
  <label className="user-label">{languages[selectedLanguage].month}</label>
</div>

                </div>
                <div className="calculator_menu-conatiner">
                <div className="input-group">
      <input
        required
        name="ნაზღაურების მიღება (თვე)"
        autoComplete="off"
        className="input"
        type="number" 
        value={anazgaurebisMigeba} 
        onChange={(e) => setAnazgaurebisMigeba(parseFloat(e.target.value))} 
        min="1" 
        />
  <label className="user-label">{languages[selectedLanguage].compensation}</label>
    </div>
    <button
  onClick={() => {
    handleCalculation(); // Call the calculation function
    handleButtonClick("fourth"); // Call the function to handle the fourth button state
  }}
  className="btn"
>
  {languages[selectedLanguage].calculation}
</button>

                </div>
                </div>
                </div>
            </div>
        <div> */}
          </div>
        </div>
      </div>

      {/* Render Cards Based on Selection */}
      <section
        className={`SliceCarouselLifecycl_section ${
          showCards ? "slide-down" : "hidden"
        }`}
      >
        <div className="container">
          <div className="SliceCarouselLifecycl_container">
            <p className="SliceCarouselLifecycle_eyebrow__O_r1c text-eyebrow">
              GeoInvests
            </p>
            <h2 className="SliceCarouselLifecycle_headline__sIvRj text-xl1">
              {languages[selectedLanguage].detail}
            </h2>
            <div className="SliceCarouselLifecycl_card-container">
            <div className="SliceCarouselLifecycl_card-container">
  {first && (
    <>
      <RofsCard
       detail={languages[selectedLanguage].bulleText}
      result={""} />
    </>
  )}
  {last && (
    <>
      <RofsCard
       detail={languages[selectedLanguage].bulleText2}
       result={""} />
      
    </>
  )}
  {second && (
    <>
      <RofsCard 
       detail={languages[selectedLanguage].bulleText3}
       result={""} />
    </>
  )}
  {fourth && (
    <>
      <RofsCard
       detail={languages[selectedLanguage].bulleText4}
       result={""} />
    </>
  )}
</div>

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
  const arrowClass = `arrow ${left ? "arrow--left" : "arrow--right"} ${
    disabled ? "arrow--disabled" : ""
  }`;

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
