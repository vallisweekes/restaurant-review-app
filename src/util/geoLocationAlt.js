import React, { Component } from "react";

const GeoLocation = OriginalReciever => {
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
      return <OriginalReciever lat={this.state.lat} lng={this.state.lng} />;
    }
  }

  function getGeoLocation() {
    const onPositionRecieved = position => {
      return {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    };

    const positionNotRecieved = positionError => {
      console.log(positionError);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onPositionRecieved,
        positionNotRecieved,
        { timeout: 0 }
      );
      const watch = navigator.geolocation.watchPosition(
        onPositionRecieved,
        positionNotRecieved
      );
      console.log(watch);
      navigator.geolocation.clearWatch(watch);
    }
  }

  return SetGeoLocation;
};

export default GeoLocation;
