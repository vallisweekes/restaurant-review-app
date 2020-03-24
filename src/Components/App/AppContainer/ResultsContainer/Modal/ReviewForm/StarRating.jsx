import React, { Fragment } from 'react';
import StarRatingComponent from 'react-star-rating-component';
const StarRating = ({ rating, handleRating }) => {
  return (
    <Fragment>
      <StarRatingComponent
        className="stars--container"
        name="rate2"
        editing={true}
        starCount={5}
        value={rating}
        starColor="#F30303"
        emptyStarColor="#CACACA"
        onStarClick={handleRating}
      />
    </Fragment>
  );
};

export default StarRating;
