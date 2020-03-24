import React, { Fragment } from 'react';
import AuthorName from './Review/AuthorName';
import ReviewStarRating from './ReviewStarRating';
import ReviewText from './Review/ReviewText';
import PropTypes from 'prop-types';

const ReviewsContainer = ({ reviews }) => {
  const customerReviews =
    reviews &&
    reviews.map((review, i) => (
      <section key={i} className="modal--review-inner">
        <div className="review--card">
          <AuthorName name={review.author_name} />
          <div className="review--card-review">
            <div className="review--card-img">
              <img src={review.profile_photo_url} alt={review.author_name} />
            </div>
            <ReviewText review={review.text} />
          </div>
          <div className="review--card-ratings">
            {review.rating}
            <span>
              {review.rating ? (
                <ReviewStarRating ratings={review.rating} />
              ) : (
                'No Rating'
              )}
            </span>
          </div>
          <div className="review--card-timestamp">
            {review.relative_time_description}
          </div>
          <div className="review--card-timestamp"></div>
        </div>
      </section>
    ));
  return <Fragment>{customerReviews}</Fragment>;
};

ReviewsContainer.propTypes = {
  reviews: PropTypes.array
};

export default ReviewsContainer;
