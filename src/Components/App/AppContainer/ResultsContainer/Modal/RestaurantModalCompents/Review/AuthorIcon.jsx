import React from 'react';
import PropTypes from 'prop-types';

const AuthorIcon = ({ icon, description }) => {
  console.log('Icon string', icon);
  return (
    <div className="review--author-img">
      <img src={icon} alt={description} />
    </div>
  );
};

AuthorIcon.propTypes = {};

export default AuthorIcon;
