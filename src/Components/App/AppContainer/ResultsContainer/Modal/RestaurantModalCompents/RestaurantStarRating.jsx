import React from 'react';
import { Star } from '@material-ui/icons';
import PropTypes from 'prop-types';

const RestaurantStarRating = ({ ratings }) => {
  return (
    <div>
      <span className="mr-1">{ratings ? ratings : 'No Rating'}</span>
      {ratings
        ? Array(ratings).fill(<Star fontSize={'small'} color={'secondary'} />)
        : 'No Ratings'}
    </div>
  );
};

RestaurantStarRating.propTypes = {
  restarauntRating: PropTypes.number
};

export default RestaurantStarRating;
