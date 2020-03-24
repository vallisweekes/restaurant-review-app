import React from 'react';

const AddReviewButton = ({ handleFormDisplay }) => {
  return (
    <div className="add-reviews">
      <button className="modal-btn" onClick={handleFormDisplay}>
        <i className="fas fa-user-edit"></i>
        Write a review
      </button>
    </div>
  );
};

export default AddReviewButton;
