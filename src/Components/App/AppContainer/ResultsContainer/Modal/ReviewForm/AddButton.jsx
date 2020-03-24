import React from 'react';

const AddButton = ({ disable }) => {
  // const disableStlye = disable ? 'review-post' : 'review-post disable';
  return (
    <button className="review-post" type="submit" disabled={disable}>
      Add
    </button>
  );
};

export default AddButton;
