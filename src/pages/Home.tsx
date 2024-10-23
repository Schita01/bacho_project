import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContextType';
import { Link } from 'react-router-dom';
import logo from '../assets/Artboard 111.png';
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "keen-slider/keen-slider.min.css";
import "../project.css";
import BulletinCard from '../components/BulletinCard';

const WheelControls: KeenSliderPlugin = (slider: any) => {
    let touchTimeout: ReturnType<typeof setTimeout>;
    let position: { x: number; y: number; };
    let wheelActive: boolean;
    let autoSlideInterval: ReturnType<typeof setInterval>;

    function dispatch(e: WheelEvent, name: string) {
        position.x -= e.deltaX;
        position.y -= e.deltaY;
        slider.container.dispatchEvent(
            new CustomEvent(name, {
                detail: {
                    x: position.x,
                    y: position.y,
                },
            })
        );
    }

    function wheelStart(e: WheelEvent) {
        position = {
            x: e.pageX,
            y: e.pageY,
        };
        dispatch(e, "ksDragStart");
    }

    function wheel(e: WheelEvent) {
        dispatch(e, "ksDrag");
    }

    function wheelEnd(e: WheelEvent) {
        dispatch(e, "ksDragEnd");
    }

    function eventWheel(e: WheelEvent) {
        e.preventDefault();
        if (!wheelActive) {
            wheelStart(e);
            wheelActive = true;
        }
        wheel(e);
        clearTimeout(touchTimeout);
        touchTimeout = setTimeout(() => {
            wheelActive = false;
            wheelEnd(e);
        }, 50);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            slider.next(); // Go to the next slide
        }, 3000); // Change slide every 3 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval); // Clear the interval
    }

    slider.on("created", () => {
        slider.container.addEventListener("wheel", eventWheel, {
            passive: false,
        });
        startAutoSlide(); // Start automatic sliding when the slider is created
    });

    slider.on("destroyed", () => {
        stopAutoSlide(); // Stop automatic sliding when the slider is destroyed
    });
};


const Home = () => {
    const { selectedLanguage, setSelectedLanguage, languages } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    

    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: false,
            rubberband: false,
            vertical: true,
        },
        [WheelControls]
    );

    const videoUrl = "https://videos.ctfassets.net/6rqe4bgsojj5/3urtuXKhJcmk7k7lTgrKxa/c38da316ad6d2825dae18706d571aa59/Roofstock_LandingVideo_102523-v3.webm";

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <section className="home_section">
            {/* Background video */}
            <video autoPlay muted loop className="main_video">
                <source src={videoUrl} type="video/webm" />
            </video>

            {/* Language menu dropdown */}
            <div className="language-menu">
                <button className="language-btn" onClick={toggleDropdown}>
                    {selectedLanguage} ▼
                </button>
                {isOpen && (
                    <ul className="language-dropdown">
                        {Object.keys(languages).map((lang) => (
                            <li key={lang} onClick={() => setSelectedLanguage(lang)} className="dropdown-item">
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
                    <button className="button-primary" onClick={onOpen}>
                        <svg className='project_svg' viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                            <path d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" />
                        </svg>
                        {languages[selectedLanguage].ViewProject}
                    </button>

                    {/* Modal for Project Slider */}
                    {isOpen && (
                        <div className="modal" onClick={onClose}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-header">
                                    <svg className='modal_delete' onClick={onClose} fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                                        <path fill="currentColor" d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z" />
                                    </svg>
                                </div>
                                <div className="modal-body">
                                    <div ref={sliderRef} className="keen-slider" style={{ height: 400 }}>
                                        <button className='number-slider-btn'>
                                            <Link className='number-slider-link' to={"/first"}>{languages[selectedLanguage].openProject}</Link>
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

                        
   
    <BulletinCard/>
                    </div>
                </div>
                </div>
      </section>
    );
};

export default Home;
