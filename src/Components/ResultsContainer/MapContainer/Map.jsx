import React, { Component, Fragment } from "react";
import { GoogleMap, Marker } from "react-google-maps";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.lat,
      lng: this.props.lng
    };
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: 51.59351, lng: -0.10257 }}
        >
          <Marker />
        </GoogleMap>
      </Fragment>
    );
  }
}

export default Map;
