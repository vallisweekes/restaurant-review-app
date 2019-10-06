import React, { Component } from "react";
import Map from "./Map";
import { withScriptjs, withGoogleMap } from "react-google-maps";

class MapContainer extends Component {
  render() {
    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
      <div className="app__map-item">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places=AIzaSyA401fisZr7FZPa63yodwJ6P33aoUu19gs`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default MapContainer;
