import React from 'react';
import PropTypes from 'prop-types';

const ReviewTotal = ({ totalReviews }) => {
  return (
    <div className="border-b m--botom-10 review-total">
      {totalReviews} <span>Customer Reviews</span>
    </div>
  );
};

ReviewTotal.propTypes = {
  totalReviews: PropTypes.number
};

export default ReviewTotal;
