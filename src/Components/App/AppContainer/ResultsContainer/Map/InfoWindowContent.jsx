import React from 'react';
import StarRating from './StarRating';

const InfoWindowContent = ({ name, image, quality, rating }) => {
  return (
    <div className="infowindow--container">
      <section className="infowindow--container-inner">
        {image ? <img src={image} alt={name} /> : null}
        <p>{name}</p>
      </section>
      <section className="infowindow--container-extra">
        <span
          className={`infowindow--container-quality text-bold ${
            quality === 'Fabulous'
              ? 'fabulous'
              : quality === 'Good'
              ? 'good'
              : 'ok'
          }`}
        >
          {quality}
        </span>

        <span>{rating ? <StarRating rating={rating} /> : null}</span>
      </section>
    </div>
  );
};

export default InfoWindowContent;
