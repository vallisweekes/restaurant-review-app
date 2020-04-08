import React from 'react';
import RestaurantOpen from './RestaurantOpen';
import RestaurantClose from './RestaurantClose';
import './restaurantHours.css';
import PropTypes from 'prop-types';

const ModalRestaurantHours = ({ openingHours }) => {
  const open = openingHours ? (
    <RestaurantOpen openingHours={openingHours} />
  ) : openingHours === 'undefined' ? (
    '<div>No times available</div>'
  ) : (
    <RestaurantClose openingHours={openingHours} />
  );

  return (
    <section className="text-small restaurant--hours">
      <p className="text-bold">Hours:</p>
      {open}
    </section>
  );
};

ModalRestaurantHours.propTypes = {
  openingHours: PropTypes.object,
};

export default ModalRestaurantHours;
