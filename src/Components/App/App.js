import React, { Fragment } from 'react';
import './app.css';
import './mediaqueries.css';
import GeoLocation from '../../util/geoLocation';
import Container from './AppContainer/index';

const App = ({ lat, lng }) => {
  return (
    <Fragment>
      <Container lat={lat} lng={lng} />
    </Fragment>
  );
};

export default GeoLocation(App);
