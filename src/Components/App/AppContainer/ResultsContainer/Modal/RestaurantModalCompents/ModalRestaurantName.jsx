import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ModalRestaurantName = ({ name }) => {
  return (
    <Fragment>
      <h3>{name}</h3>
    </Fragment>
  );
};
ModalRestaurantName.propTypes = {
  name: PropTypes.string
};

export default ModalRestaurantName;
