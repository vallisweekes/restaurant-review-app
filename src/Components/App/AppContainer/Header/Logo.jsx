import React from 'react';
import PropTypes from 'prop-types';
const Logo = ({ logo, description }) => {
  // console.log('logo', logo);
  return (
    <div>
      <img src={logo} alt={description} />
    </div>
  );
};
Logo.prototype = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
export default Logo;
