import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContextType";
import { Link } from "react-router-dom";
import logo from "../assets/logox.png";
import {  useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import "../project.css";
import BulletinCard from "../components/BulletinCard";
import PreLoader from "../components/PreLoader";

// const WheelControls: KeenSliderPlugin = (slider: any) => {
  // ... (same as your original code)
// };



const Home = () => {
  const { selectedLanguage, setSelectedLanguage, languages } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // For language menu
  const [isProjectOpen, setIsProjectOpen] = useState(false); // For project modal

  const onCloseLanguage = () => setIsLanguageOpen(false);
  const onOpenLanguage = () => setIsLanguageOpen(true);

  const onCloseProject = () => setIsProjectOpen(false);
  const onOpenProject = () => setIsProjectOpen(true);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      rubberband: false,
      vertical: true,
    },
    // [WheelControls]
  );

  onOpenLanguage
  const videoUrl =
    "https://videos.ctfassets.net/6rqe4bgsojj5/3urtuXKhJcmk7k7lTgrKxa/c38da316ad6d2825dae18706d571aa59/Roofstock_LandingVideo_102523-v3.webm";

  const toggleDropdown = () => setIsLanguageOpen(!isLanguageOpen);
  const [loading, setLoading] = useState(true);
  loading

    // Simulate loading delay
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500); // Adjust duration as needed
  
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

  return (
    <section className="home_section">
          <PreLoader/>     

      {/* Background video */}
      <video autoPlay muted loop className="main_video">
        <source src={videoUrl} type="video/webm" />
      </video>

      {/* Language menu dropdown */}
      <div className="language-menu">
        <button className="language-btn" onClick={toggleDropdown}>
          {selectedLanguage} ▼
        </button>
        {isLanguageOpen && (
          <ul className="language-dropdown">
            {Object.keys(languages).map((lang) => (
              <li
                key={lang}
                onClick={() => {
                  setSelectedLanguage(lang);
                  onCloseLanguage(); // Close dropdown after selection
                }}
                className="dropdown-item"
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Content overlay */}
      <div className="content_overlay">
        <div className="main-left">
          <img src={logo} alt="404" className="logo" />
          <h1 className="main_title-h1">{languages[selectedLanguage].title}</h1>
        </div>

        <div className="main-center">
          <button className="button-primary" onClick={onOpenProject}>
            <svg
              className="project_svg"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" />
            </svg>
            {languages[selectedLanguage].ViewProject}
          </button>

          {/* Modal for Project Slider */}
          {isProjectOpen && (
            <div className="modal" onClick={onCloseProject}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <svg
                    className="modal_delete"
                    onClick={onCloseProject}
                    fill="none"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fill="currentColor"
                      d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                    />
                  </svg>
                </div>
                <div className="modal-body">
                  <div
                    ref={sliderRef}
                    className="keen-slider"
                    style={{ height: 400 }}
                  >
                    <button className="number-slider-btn">
                      <Link className="number-slider-link" to={"/first"}>
                        {languages[selectedLanguage].openProject}
                      </Link>
                    </button>

                    <div className="keen-slider__slide number-slide1"></div>
                    <div className="keen-slider__slide number-slide2"></div>
                    <div className="keen-slider__slide number-slide3"></div>
                    <div className="keen-slider__slide number-slide4"></div>
                    <div className="keen-slider__slide number-slide5"></div>
                    <div className="keen-slider__slide number-slide6"></div>
                    <div className="keen-slider__slide number-slide7"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="main-right">
          <div className="bulletin_container">
            <BulletinCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
