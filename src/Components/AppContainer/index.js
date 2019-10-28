import React from "react";
import {Map GoogleApiWrapper } from "google-maps-react";
import AppContainer from "../AppContainer/AppContainer";


class GoogleMap extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPlaces = this.fetchPlaces.bind(this);
  }

  fetchPlaces = (mapProps, map) => {
    const { google } = mapProps;
    console.log(mapProps);
    const userLocation = new google.maps.LatLng(this.props.lat, this.props.lng);
    const request = {
      location: userLocation,
      radius: "900",
      type: ["restaurant"]
    };

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, getPlaces);
    const { storeRestaurants } = this.props;
    function getPlaces(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        storeRestaurants(Array.from(results));
      }
    }
  };
  storeRestaurants = data => {
    console.log("google data", data);
  };
  render() {
    return <AppContainer data={this.fetchPlaces} />;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8Byy23oFligL0X1_WQYca0ABneIhxOow"
})(GoogleMap);
