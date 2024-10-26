import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContextType";
import { Link } from "react-router-dom";
import logo from "../assets/logox.png";
import {  useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import "../project.css";



const Home = () => {

  // carousel

  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    label: 'Acquisitions',
    content: 'Details about Acquisitions...',
  });

  // Data for each circular item
  const items = [
    { id: 1, label: 'Acquisitions', content: 'საბანკო გარანტიით დაცული 16% წლიური სარგებელი 3 წლის მანძილზე' },
    { id: 2, label: 'Dispositions', content: 'საინვესტიციო მოგების მიღება ინდივიდუალური  გრაფიკით ( თვეში ერთხელ , 3 თვეში ერთხელ , 6 თვეში ერთხელ , წლის ბოლოს, წლის დასაწყისში. ) ' },
    { id: 3, label: 'Property ', content: 'Bacho Georgian ნულოვანი გადასახადი ჩვენ გვჯერა გამჭვირვალობის - ნულოვანი საკომისიო ნიშნავს,რომ თქვენ გათვაისუფლებული ხართ ნებისმიერი სახის გადასახადისგან და 100% -ით ინახავთ თქვენს საინვესტიციო მოგებას' },
    { id: 4, label: 'Leasing', content: '' },
  ];
  // carousel


  const { selectedLanguage, setSelectedLanguage, languages } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // For language menu
   // Functions to handle dropdown toggle
   const onCloseLanguage = () => setIsLanguageOpen(false);
   const onOpenLanguage = () => setIsLanguageOpen(true);
  onOpenLanguage
   const toggleDropdown = () => setIsLanguageOpen(!isLanguageOpen);
     // Function to handle language selection
  const handleLanguageSelection = (lang: string) => {
    setSelectedLanguage(lang);
    onCloseLanguage(); // Close dropdown after selection
  };


  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      rubberband: false,
      vertical: true,
    },
    // [WheelControls]
  );
  sliderRef
  
  const videoUrl =
    "https://videos.ctfassets.net/6rqe4bgsojj5/3urtuXKhJcmk7k7lTgrKxa/c38da316ad6d2825dae18706d571aa59/Roofstock_LandingVideo_102523-v3.webm";

    useEffect(() => {
      // Scroll to the top of the page on component mount
      window.scrollTo(0, 0);
    }, []);


  return (
    <section className="home_section ">

      {/* Background video */}
      <video autoPlay muted loop className="main_video">
        <source src={videoUrl} type="video/webm" />
      </video>

      <div className="language-menu">
      <button className="language-btn" onClick={toggleDropdown}>
        {selectedLanguage + "▼"} 
      </button>
      {isLanguageOpen && (
        <ul className="language-dropdown">
          {Object.keys(languages).map((lang) => (
            <li
              key={lang}
              onClick={() => handleLanguageSelection(lang)}
              className="dropdown-item"
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>

      {/* Language menu dropdown */}
      
       <div className="content_overlay">
        <img data-aos="zoom-in" className="logo"  src={logo} alt="" />
        <div className="content-overlay-text">
          <h1  data-aos="fade-up" className="content-h1">geoinvest</h1>
          <span  data-aos="fade-up" className="content-span">
            {languages[selectedLanguage].mainText}
          </span>
        </div>
<button  
   onClick={() => window.scrollBy({ top: 970, behavior: "smooth" })}

 className="button">
    <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text"> {languages[selectedLanguage].moreBtn}</span>
    </span>
</button>
       </div>

       <div className="investing">
          <div className="container">
            <div className="investing-container">
              <p data-aos="fade-right" className="SliceCarouselLifecycle_eyebrow__O_r1c text-eyebrow">GEOINVEST</p>
              <span data-aos="fade-right" className="SliceCarouselLifecycle_headline__sIvRj text-xl1">{languages[selectedLanguage].investmentMainText}</span>
              {/* <InfoCarousel/> */}
              {/* info carousel */}

              <div className="carousel-container">
              {/* <Link className="carousel-next-page2" to={"/project"}>იხილეთ პროექტი</Link> */}
      <div data-aos="zoom-in" className="center-circle">
        {/* <h2 className="carousel-next-page">იხილეთ პროექტი</h2> */}
        <Link className="carousel-next-page" to={"/project"}>იხილეთ პროექტი</Link>
      </div>
      <div data-aos="zoom-in" className="circular-menu">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`menu-item item-${index + 1} ${selectedItem?.id === item.id ? 'active' : ''}`} // Compare IDs to set active state
            onClick={() => setSelectedItem(item)}
          >
            {item.label}
          </div>
        ))}
      </div>
      {selectedItem && (
        <div data-aos="fade-right" className="info-box">
          <p  className="sircle-span">{selectedItem.content}</p>
        </div>
      )}
    </div>

              {/* info carousel */}
            </div>
          </div>
       </div>

    </section>
  );
};

export default Home;
