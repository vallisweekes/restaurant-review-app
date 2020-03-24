import React from 'react';
import Input from './Input';
import StarRating from './StarRating';
const RatingsFilterItems = ({ ratings, onRatingChecked }) => {
  return (
    <ul>
      {ratings &&
        ratings.map((ratingNum, i) => (
          <li key={i} className="ratings__dropdonw-items p-2 ">
            <Input ratingNum={ratingNum} onRatingChecked={onRatingChecked} />
            <StarRating key={i} ratingNum={ratingNum} />
          </li>
        ))}
    </ul>
  );
};

export default RatingsFilterItems;
