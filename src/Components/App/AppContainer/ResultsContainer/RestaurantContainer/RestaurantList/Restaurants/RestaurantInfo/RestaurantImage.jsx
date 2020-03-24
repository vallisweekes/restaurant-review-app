import React from 'react';
import PropTypes from 'prop-types';
import Favourite from './Favourite';
const RestaurantImage = ({
  restaurantImage,
  restaurantName,
  placeId,
  restaurauntObject,
  handleFavourite,
  favourite
}) => {
  return (
    <div className="rest__card-img-holder ">
      <section className="favourite--button-wrapper">
        <Favourite
          onClick={() => handleFavourite(restaurauntObject)}
          favourite={favourite}
        />
      </section>
      <img
        id={placeId}
        className="rest__card-img"
        src={restaurantImage}
        alt={restaurantName}
      />
    </div>
  );
};

RestaurantImage.propTypes = {
  restaurantImage: PropTypes.string,
  restaurantName: PropTypes.string
};

export default RestaurantImage;
