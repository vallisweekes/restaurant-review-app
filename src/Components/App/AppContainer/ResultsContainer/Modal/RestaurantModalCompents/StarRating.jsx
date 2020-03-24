import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
const StarRating = ({ ratings }) => {
  return (
    <div className="modal--starrating-wrap">
      <span className="mr-1">{ratings ? ratings : 'No Rating'}</span>
      <StarRatingComponent
        name="rate2"
        editing={false}
        starCount={5}
        value={ratings}
        starColor="#F30303"
        emptyStarColor="#CACACA"
      />
    </div>
  );
};

export default StarRating;
