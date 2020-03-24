import React from 'react';
import PropTypes from 'prop-types';

const RestaurantModalStreetView = ({ name, location }) => {
  const style = {
    width: '100%',
    height: '150px'
  };

  const streetView = `https://maps.googleapis.com/maps/api/streetview?location=${location.lat},${location.lng}&size=410x120&(Left: fov=90; Right: fov=80)&heading=11&pitch=0.56&key=AIzaSyCcMtA-_NBxt6cD8uefrk6EFlv-2YfXtS0`;

  return (
    <section className="header-img">
      <h5>Sreet View</h5>
      <img style={style} src={streetView} alt={name} />
    </section>
  );
};

RestaurantModalStreetView.propTypes = {
  name: PropTypes.string,
  geometry: PropTypes.object
};

export default RestaurantModalStreetView;
