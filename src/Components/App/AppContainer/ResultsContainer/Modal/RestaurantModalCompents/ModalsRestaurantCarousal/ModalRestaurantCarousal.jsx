import React from 'react';

import { Zoom } from 'react-slideshow-image';
import PropTypes from 'prop-types';
import './slide.css';

const ModalRestaurantCarousal = ({ photosData, name }) => {
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 800,
    infinite: true,
    indicators: true,
    scale: 0.3,
    arrows: true
  };

  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {photosData.map((photo, index) => (
          <img
            key={index}
            style={{
              width: '100%',
              height: '175px',
              objectFit: 'cover',
              padding: '10px'
            }}
            src={photo.src}
            alt={name}
          />
        ))}
      </Zoom>
    </div>
  );
};

ModalRestaurantCarousal.propTypes = {
  photos: PropTypes.array
};

export default ModalRestaurantCarousal;
