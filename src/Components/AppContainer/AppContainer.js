import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import "./app-container.css";
import { paginate } from "../../util/paginate";
import Header from "../Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import { getMyRestaraunts } from "../../util/getRMyRestaurants";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      googleResults: [],
      myRestaurants: getMyRestaraunts(),
      currentPage: 1,
      pageSize: 5,
      ratings: [5, 4, 3, 2, 1]
    };
  }

  fetchPlaces = (mapProps, map) => { // SAHIB: Move this to index file
    const { google } = mapProps;
    const { addRestaurants, allRestaurantsLoaded } = this.props;

    const userLocation = new google.maps.LatLng(this.props.lat, this.props.lng);
    const request = {
      location: userLocation,
      radius: "900",
      type: ["restaurant"]
    };

    // let resultsArr = [];

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, getPlaces);
    function getPlaces(myResults, status, pagination) {
      if (status === "OK") {
        if (pagination.hasNextPage) {
          pagination.nextPage();
        } else {
          allRestaurantsLoaded(google, map);
        }
      }
      const placeIds = myResults.map(res => {
        return res.place_id;
      });

      addRestaurants(myResults);
    }
  };


  onIconClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        // showingInfoWindow: false,
        // activeMarker: null
      });
    }
  };

  handleRatings = () => {
    console.log(this.state.ratings);
  };

  handleOpenNowFilter() {}

  handlePageChange(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {

    const { myRestaurants: allRestaruants, pageSize, currentPage } = this.state;

    const restaraunts = paginate(allRestaruants, currentPage, pageSize);

    return (
      <div className="container-fluid app__containter">
        <header className="app__container-header">
          <Header />
        </header>
        <main className="app__container-results">
          <ResultsContainer
            lat={this.props.lat}
            lng={this.props.lng}
            fetchPlaces={this.fetchPlaces}
            myRestaurants={restaraunts}
            onPageChange={this.handlePageChange}
          />
        </main>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCcMtA-_NBxt6cD8uefrk6EFlv-2YfXtS0"
})(AppContainer);
