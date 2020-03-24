import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
const StarRating = ({ rating }) => {
  return (
    <div className="rest__card-starrating">
      <span className="mr-1">{rating}</span>
      <StarRatingComponent
        name="rate2"
        editing={false}
        starCount={5}
        value={rating}
        starColor="#F30303"
        emptyStarColor="#CACACA"
      />
    </div>
  );
};

export default StarRating;
