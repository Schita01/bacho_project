import { useState, useEffect, useCallback } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useLanguage } from "../context/LanguageContextType"; 
import { Link } from "react-router-dom";

const Project = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  const InfoCarousel = () => {
    const items = [
      { id: 1, label: 'Acquisitions', content: 'Details about Acquisitions...' },
      { id: 2, label: 'Dispositions', content: 'Details about Dispositions...' },
      { id: 3, label: 'Property Management', content: 'Details about Property Management...' },
      { id: 4, label: 'Leasing', content: 'Details about Leasing...' },
    ];

    const [selectedItem, setSelectedItem] = useState(items[0]);

    return (
      <div className="circular-menu">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`menu-item item-${index + 1} ${selectedItem.id === item.id ? 'active' : ''}`} 
            onClick={() => setSelectedItem(item)}
          >
            {item.label}
          </div>
        ))}
        {selectedItem && (
          <div className="info-box">
            <p className="sircle-span">{selectedItem.content}</p>
          </div>
        )}
      </div>
    );
  };

  const { selectedLanguage, setSelectedLanguage, languages } = useLanguage();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
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



  useEffect(() => {
    if (loaded && instanceRef.current) {
      const intervalId = setInterval(() => {
        if (instanceRef.current) {
          instanceRef.current.next(); 
        }
      }, 5000);

      return () => clearInterval(intervalId); // Clear interval when component unmounts
    }
  }, [loaded]);

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsLanguageOpen(prev => !prev);
  }, []);

  const handleLanguageSelection = useCallback((lang: string) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false);
  }, [setSelectedLanguage]);

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
              <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#fff" />
              <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#fff" />
            </svg>
          </div>
          <p className="button-text">{languages[selectedLanguage].backPage}</p>
        </button>
      </Link>

      <div className="navigation-wrapper">
        <div className="language-menu">
          <button className="language-btn" onClick={toggleDropdown}>
            {selectedLanguage + " ▼"}
          </button>
          {isLanguageOpen && (
            <ul className="language-dropdown">
              {Object.keys(languages).map((lang) => (
                <li key={lang} onClick={() => handleLanguageSelection(lang)} className="dropdown-item">
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-x1">
            <div className="container">
              <div className="project-slider-text-container">
                <span className="project-slider-span">მოგესალმებით ეს არის</span>
                <p className="project-slider-p">
                  გამარჯობა ეს არის სლაიდერის ტექსტი მოცემულია აქ ყველა <br />
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
                instanceRef.current?.next();
              }}
              disabled={false}
            />
          </>
        )}
      </div>

      <div className="investing">
        <div className="container">
          <div className="investing-container">
            <p data-aos="fade-right" className="SliceCarouselLifecycle_eyebrow__O_r1c text-eyebrow">
              GEOINVEST
            </p>
            <span data-aos="fade-right" className="SliceCarouselLifecycle_headline__sIvRj text-xl1">
              {languages[selectedLanguage].restaurantMainText}
            </span>

            <div className="carousel-container">
              <div className="center-circle">
                <p  className="carousel-next-page">GEOINVEST</p>
              </div>
              <InfoCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Arrow Component
function Arrow({ disabled, left, onClick }: { disabled: boolean; left?: boolean; onClick: (e: any) => void; }) {
  const arrowClass = `arrow ${left ? "arrow--left" : "arrow--right"} ${disabled ? "arrow--disabled" : ""}`;

  return (
    <svg onClick={onClick} className={arrowClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Project;
