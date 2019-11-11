import React from "react";
import {Map, GoogleApiWrapper } from "google-maps-react";
import AppContainer from "./AppContainer";


export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      reviews: []
    }
  }

  addRestaurants = (toAddRestaurants) => {
    const { restaurants } = this.state;

    this.setState({
      restaurants: [...restaurants, ...toAddRestaurants]
    });
  };

  addReviews = (restaurantId, reviews) => {

    this.setState({
      reviews: [...this.state.reviews, {[restaurantId]: reviews}]
    });
  };

  allRestaurantsLoaded = (google, map) => {
    // SAHIB: Once all restaurants are loaded, we shall get reviews for them (call AllPlaces functinon)
    const { restaurants } = this.state;
    const placeIds = restaurants.map(res => {
        return res.place_id;
      });

    this.allPlaces(google, map,placeIds);
  }

  allPlaces = (google, map, placeIds) => {
    const addReviews = this.addReviews;

    placeIds.map((Id, i) => {
      setTimeout(() => {
        const request = {
          placeId: `${Id}`,
          fields: ["name", "place_id", "rating", "reviews", "formatted_address"]
        };
        const service = new google.maps.places.PlacesService(map);
        service.getDetails(request, getInfo);

        function getInfo(results, status) {
          if (status === "OK") {
            addReviews(Id, results);
          }
        }
      }, 2500);

      return Id;
    });
  }

  render() {
    const { lat, lng } = this.props;
    const { restaurants, reviews } = this.state;

    console.log('restaurants, reviews', restaurants, reviews);

    return <AppContainer
            lat={lat}
            lng={lng} 
            addRestaurants={this.addRestaurants}
            allRestaurantsLoaded={this.allRestaurantsLoaded}
      />;
  }

}

