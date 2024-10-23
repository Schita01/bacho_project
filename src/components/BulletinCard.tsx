import { useState } from "react";
import { useLanguage } from "../context/LanguageContextType"; // Ensure this is the correct import

const BulletinCard = () => {
  const { languages, selectedLanguage } = useLanguage(); // Correct way to get language and selected language

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    // If the clicked accordion is already active, set activeIndex to null to close it
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="custom-accordion">
      {/* Accordion 1 */}
      <div className="bulletin " onClick={() => handleClick(0)}>
        <div className="bulletin-span">
          {languages[selectedLanguage].blAccordionItem1}
        </div>
        {activeIndex === 0 && (
          <div className="accordion-content">
            {languages[selectedLanguage].content1}
          </div>
        )}
      </div>

      {/* Accordion 2 */}
      <div className="bulletin " onClick={() => handleClick(1)}>
        <div className="bulletin-span">
          {languages[selectedLanguage].blAccordionItem2}
        </div>
        {activeIndex === 1 && (
          <div className="accordion-content">
            {languages[selectedLanguage].content2}
          </div>
        )}
      </div>

      {/* Accordion 3 */}
      <div onClick={() => handleClick(2)} className="bulletin bulletin3">
        <span className="bulletin-span">
          {languages[selectedLanguage].blAccordionItem3}
        </span>
        {activeIndex === 2 && (
          <div className="accordion-content">
            {languages[selectedLanguage].content3}
          </div>
        )}
      </div>

      {/* Accordion 4 */}
      <div className="bulletin" onClick={() => handleClick(3)}>
        <span className="bulletin-span">
          {languages[selectedLanguage].blAccordionItem4}
        </span>
        {activeIndex === 3 && (
          <div className="accordion-content">
            {languages[selectedLanguage].content4}
          </div>
        )}
      </div>
    </div>
  );
};

export default BulletinCard;
