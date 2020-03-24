import React, { Fragment } from 'react';
import ReviewTotal from './Review/ReviewTotal';
import AddReviewButton from './AddReviewButton';
import ReviewsContainer from './ReviewsContainer';
import PropTypes from 'prop-types';
const RestaurantModalReviews = ({ reviews, handleFormDisplay }) => {
  return (
    <Fragment>
      <ReviewTotal totalReviews={reviews.length} />
      <AddReviewButton handleFormDisplay={handleFormDisplay} />
      <h4 className="mt-4">Reviews</h4>
      <ReviewsContainer reviews={reviews} />
    </Fragment>
  );
};

RestaurantModalReviews.propTypes = {
  reviews: PropTypes.array
};

export default RestaurantModalReviews;
