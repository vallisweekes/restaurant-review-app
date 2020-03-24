import React, { Component } from 'react';
import { geolocated, geoPropTypes } from 'react-geolocated';
import Container from '../Components/AppContainer/index';

class getGeoLocation extends Component {
  render() {
    const { coords } = this.props;
    return <Container lat={coords.latitude} lng={coords.longitude} />;
  }
}

getGeoLocation.propTypes = { ...getGeoLocation.propTypes, ...geoPropTypes };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 1,
    timeout: Infinity
  },
  watchPosition: true,
  userDecisionTimeout: 5000
})(getGeoLocation);
