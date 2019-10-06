import React, { Component } from "react";
import Map from "./Map";
import { withScriptjs, withGoogleMap } from "react-google-maps";

class MapContainer extends Component {
  render() {
    const WrappedMap = withScriptjs(withGoogleMap(Map));
    return (
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div className="app__map" />}
        containerElement={<div className="app__map-container" />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default MapContainer;
