import React, { Component } from "react";

const GeoLocation = Reciever => {
  class SetGeoLocation extends Component {
    state = {
      lat: [],
      lng: []
    };
    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position =>
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }),
        err => this.setState({ errorMessage: err.message })
      );
    }
    render() {
      return <Reciever lat={this.state.lat} lng={this.state.lng} />;
    }
  }

  return SetGeoLocation;
};

export default GeoLocation;
