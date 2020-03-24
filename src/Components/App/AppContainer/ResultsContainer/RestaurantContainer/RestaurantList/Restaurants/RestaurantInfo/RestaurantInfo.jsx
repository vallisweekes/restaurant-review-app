import React from 'react';
import RestaurantRatingsTotal from './RestaurantRatingsTotal';

import StarRating from './StarRating';

// import PropTypes from 'prop-types';

const RestaurantInfo = ({
  restaurantName,
  restaurantAddress,
  restaurantQuality,
  rating,
  totalRatings,
  ratingText,
  showDetails,
  placeId,
  id
}) => {
  return (
    <section
      className="rest__card-info"
      onClick={() => showDetails(placeId, id)}
    >
      <div className="flex__items-column">
        <div
          className={`rest__card-quality text-bold ${
            restaurantQuality === 'Fabulous'
              ? 'fabulous'
              : restaurantQuality === 'Good'
              ? 'good'
              : 'ok'
          }`}
        >
          {restaurantQuality}
        </div>
        <div className="rest__card-name text-bold text-size-lg">
          <div>{restaurantName}</div>
        </div>
        <div className="rest__card-address text-bold">{restaurantAddress}</div>
      </div>
      <section className="ratings--wrapper">
        <StarRating rating={rating} />
        <RestaurantRatingsTotal
          totalRatings={totalRatings ? totalRatings : 0}
          ratingText={ratingText}
        />
      </section>
    </section>
  );
};

// RestaurantInfo.propTypes = {
//   restaurantName: PropTypes.string,
//   restaurantAddress: PropTypes.string,
//   restaurantQuality: PropTypes.string,
//   restarauntRating: PropTypes.number,
//   ratingText: PropTypes.string,
//   restarauntRatingTotal: PropTypes.number
// };

export default RestaurantInfo;
