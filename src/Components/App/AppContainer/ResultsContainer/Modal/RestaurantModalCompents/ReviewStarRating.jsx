import React, { Fragment } from 'react';
import StarRatingComponent from 'react-star-rating-component';
const StarRating = ({ ratings }) => {
  return (
    <Fragment>
      <StarRatingComponent
        name="rate2"
        editing={false}
        starCount={5}
        value={ratings}
        starColor="#F30303"
        emptyStarColor="#CACACA"
      />
    </Fragment>
  );
};

export default StarRating;
