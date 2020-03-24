import React from 'react';

const CancelButton = ({ handleCloseForm }) => {
  return (
    <button className="review-cancel" type="button" onClick={handleCloseForm}>
      Cancel
    </button>
  );
};

export default CancelButton;
