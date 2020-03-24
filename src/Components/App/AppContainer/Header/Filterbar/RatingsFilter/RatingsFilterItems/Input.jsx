import React from 'react';

const Input = ({ ratingNum, onRatingChecked }) => {
  return (
    <div className="rating--filter-holder">
      <input
        type="checkbox"
        className="mr-2"
        value={ratingNum}
        onChange={e => onRatingChecked(ratingNum, e)}
      />
      {ratingNum}
      <span className="checkmark"></span>
    </div>
  );
};

export default Input;
