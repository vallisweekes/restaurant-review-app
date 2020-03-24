import React, { Component } from 'react';

const GeoLocation = Reciever => {
  class SetGeoLocation extends Component {
    state = {
      lat: [],
      lng: []
    };

    function getGeoLocationPromise() {
      return new Promise(function(resolve, reject) {
        if (navigator.geolocation) {
          const geo_options = {
            enableHighAccuracy: true,
            maximumAge: 50000,
            timeout: 6000
          };

          navigator.geolocation.getCurrentPosition(
              reject, reject,
            geo_options
          );
          //   navigator.geolocation.getCurrentPosition(geo_options);

        } else {
          reject(Error('No location'));
        }
      });
    }

    componentDidMount() {
      this.getGeoLocationPromise.then();
      const geo_options = {
        enableHighAccuracy: true,
        maximumAge: 50000,
        timeout: 6000
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.sucess,
          this.error,
          geo_options
        );
      } else {
        this.error();
      }
    }

    sucess = position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    };

    error = err => {
      // debugger;
      if (err) {
      }
      console.log(`Error ${err.code} `);
    };

    render() {
      return <Reciever lat={this.state.lat} lng={this.state.lng} />;
    }
  }

  return SetGeoLocation;
};

export default GeoLocation;
