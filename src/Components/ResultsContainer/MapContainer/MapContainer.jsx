import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={{ width: "45%" }}
        initialCenter={{ lat: 51.59351, lng: -0.10257 }}
      >
        <Marker position={{ lat: 51.59351, lng: -0.10257 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCuURQLKaUsOXYZWDi0ZXyKxCe0Hou48bU&callback"
})(MapContainer);
