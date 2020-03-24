import React from 'react';
import ReadMoreReact from 'read-more-react';
import PropTypes from 'prop-types';

const ReviewText = ({ review }) => {
  //Give unique Key
  return (
    <div className="review-card-text">
      <ReadMoreReact key={review} text={review} />
    </div>
  );
};

ReviewText.propTypes = {
  review: PropTypes.string
};

export default ReviewText;
