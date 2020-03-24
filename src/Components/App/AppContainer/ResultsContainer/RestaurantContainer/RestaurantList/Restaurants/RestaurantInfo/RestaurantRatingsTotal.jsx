import React from 'react';
// import PropTypes from 'prop-types';

const RestaurantRatingsTotal = ({ totalRatings, ratingText }) => {
  return (
    <div className="rest__card-ratingstotal">
      <p>
        {totalRatings === 1
          ? `(${totalRatings}) ${ratingText}`
          : `(${totalRatings}) ${ratingText}s`}
      </p>
    </div>
  );
};

// RestaurantRatingsTotal.propTypes = {
//   totalRatings: PropTypes.number
// };

export default RestaurantRatingsTotal;
