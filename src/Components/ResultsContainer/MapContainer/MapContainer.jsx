import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import RestList from "../../../restList.json";
class MapContainer extends Component {
  state = {
    lat: null,
    lng: null
  };

  componentWillMount() {
    this.setState({
      lat: this.props.lat,
      lng: this.props.lng
    });
  }
  render() {
    console.log(RestList.results);
    console.log(this.props);
    return (
      <Map
        google={this.props.google}
        q
        zoom={15}
        initialCenter={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
      >
        {RestList.results.map(rest => (
          <Marker
            key={rest.id}
            position={{
              lat: rest.geometry.location.lat,
              lng: rest.geometry.location.log
            }}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8Byy23oFligL0X1_WQYca0ABneIhxOow"
})(MapContainer);
