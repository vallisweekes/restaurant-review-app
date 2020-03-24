import React, { Component } from 'react';
import RestaurantOpen from './RestaurantOpen';
import RestaurantClose from './RestaurantClose';
import './restaurantHours.css';
import PropTypes from 'prop-types';

class ModalRestaurantHours extends Component {
  render() {
    const { openingHours } = this.props;

    console.log('Opening Hours', openingHours);
    return (
      <section className="text-small restaurant--hours">
        <p className="text-bold">Hours:</p>
        {openingHours.open_now ? (
          <RestaurantOpen openingHours={openingHours} />
        ) : (
          <RestaurantClose openingHours={openingHours} />
        )}
      </section>
    );
  }
}

ModalRestaurantHours.propTypes = {
  openingHours: PropTypes.object
};

export default ModalRestaurantHours;
