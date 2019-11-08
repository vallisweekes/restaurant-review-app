import React, { Fragment } from "react";
import "./app.css";
import GeoLocation from "../../util/geoLocation";
import AppContainer from "../AppContainer/AppContainer";

const App = ({ lat, lng }) => {
  return (
    <Fragment>
      <AppContainer lat={lat} lng={lng} />
    </Fragment>
  );
};

export default GeoLocation(App);
