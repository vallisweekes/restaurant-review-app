import React, { Component } from 'react';

const GeoLocation = (Reciever) => {
  class SetGeoLocation extends Component {
    state = {
      lat: 51.593416217497875,
      lng: -0.10362844184942505,
    };

    componentDidMount() {
      function getGeoLocationPromise() {
        return new Promise((resolve, reject) => {
          const geo_options = {
            enableHighAccuracy: true,
            maximumAge: 6000,
            timeout: 5000,
          };
          console.log('The resolve object', resolve);
          navigator.geolocation.getCurrentPosition(
            resolve,
            reject,
            geo_options
          );
        });
      }

      getGeoLocationPromise()
        .then((position) => {
          this.setState(() => {
            return {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
          });
        })
        .catch((err) => {
          console.error(err.message);
        });
    }

    render() {
      const { lat, lng } = this.state;
      console.log(lat, lng);
      return <Reciever lat={lat} lng={lng} />;
    }
  }

  return SetGeoLocation;
};

export default GeoLocation;
