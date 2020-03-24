import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
const StarRating = ({ ratingNum }) => {
  return (
    <span className="ml-2">
      <StarRatingComponent
        name="rate2"
        editing={false}
        starCount={ratingNum}
        value={ratingNum}
        starColor="#F30303"
        emptyStarColor="#CACACA"
      />
    </span>
  );
};

export default StarRating;
