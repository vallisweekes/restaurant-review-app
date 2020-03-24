import React, { Component } from 'react';
import RestaurantOpen from './RestaurantOpen';
import RestaurantClose from './RestaurantClose';
import './restaurantHours.css';
import PropTypes from 'prop-types';

class ModalRestaurantHours extends Component {
  render() {
    const { openingHours } = this.props;
    const open = openingHours.open_now ? (
      <RestaurantOpen openingHours={openingHours} />
    ) : openingHours === 'undefined' ? null : (
      <RestaurantClose openingHours={openingHours} />
    );

    return (
      <section className="text-small restaurant--hours">
        <p className="text-bold">Hours:</p>
        {open}
      </section>
    );
  }
}

ModalRestaurantHours.propTypes = {
  openingHours: PropTypes.object
};

export default ModalRestaurantHours;
