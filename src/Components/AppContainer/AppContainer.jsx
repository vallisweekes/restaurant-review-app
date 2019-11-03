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

  fetchPlaces = (mapProps, map) => {
    // const home = {
    //   lat: 51.593299099999996,
    //   lng: -0.1037042
    // };
    const { google } = mapProps;
    const userLocation = new google.maps.LatLng(this.props.lat, this.props.lng);
    const request = {
      location: userLocation,
      radius: "900",
      type: ["restaurant"]
    };

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, getPlaces);
    const storeRestaurants = this.storeRestaurants;
    const getDeets = this.getDetails;
    async function getPlaces(results, status, pagination) {
      if (status === "OK") {
        pagination.nextPage();
        const getAllResults = await Promise.all([
          ...results,
          ...results,
          ...results
        ]);

        storeRestaurants(getAllResults);
        const interval = 1000;
        const placeId = getAllResults.map(placeResult => placeResult.place_id);
        placeId.forEach((id, index) => {
          setTimeout(() => {
            const request = {
              placeId: id,
              fields: [
                "name",
                "place_id",
                "rating",
                "reviews",
                "formatted_address"
              ]
            };
            service.getDetails(request, getInfo);
            function getInfo(results, status) {
              if (status === "OK") {
                // console.log("these are my results from get details", results);
                getDeets(results);
              }
            }
          }, interval * index);
        });
      }
    }
  };

  componentDidMount() {
    this.storeRestaurants = googlePlaces => {
      console.log("Getting Results From Places Api 1", googlePlaces);
    };
  }

  getDetails = result => {
    console.log("All Individual Restaurant Data", result);
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
    // const { google } = this.props;

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
