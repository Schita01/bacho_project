import { useState } from 'react';
import { Link } from 'react-router-dom';

const InfoCarousel = () => {
  // Set the first item as the default selected item
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    label: 'Acquisitions',
    content: 'Details about Acquisitions...',
  });

  // Data for each circular item
  const items = [
    { id: 1, label: 'Acquisitions', content: 'Details about Acquisitions...' },
    { id: 2, label: 'Dispositions', content: 'Details about Dispositions...' },
    { id: 3, label: 'Property Management', content: 'Details about Property Management...' },
    { id: 4, label: 'Leasing', content: 'Details about Leasing...' },
  ];

  return (
    <div  data-aos="zoom-in" className="carousel-container">
      <div className="center-circle">
        {/* <h2 className="carousel-next-page">იხილეთ პროექტი</h2> */}
        <Link className="carousel-next-page" to={"/project"}>იხილეთ პროექტი</Link>
      </div>
      <div className="circular-menu">
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
     
        <div className="info-boxses">
          <span className="sircle-span project-sircle-p">{selectedItem.content}</span>
        </div>
    </div>
  );
};

export default InfoCarousel;
