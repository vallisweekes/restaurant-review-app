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
    const { google } = mapProps;

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
      if (status === "OK") pagination.nextPage();
      console.log("These are my places 🎷", myResults);
      const placeIds = myResults.map(res => {
        return res.place_id;
      });

      allPLaces(placeIds);
    }

    function allPLaces(placeId) {
      placeId.map((Id, i) => {
        const request = {
          placeId: `${Id}`,
          fields: ["name", "place_id", "rating", "reviews", "formatted_address"]
        };
        // console.log("Place Id Results 🥂", Id);
        // console.log("These are my places 🎷", request);
        setTimeout(() => {
          const service = new google.maps.places.PlacesService(map);
          service.getDetails(request, getInfo);

          function getInfo(results, status) {
            if (status === "OK") {
              resultsInArray(results);
            }
          }
        }, 1500 * i);
        return Id;
      });
    }
    function resultsInArray(results) {
      console.log("Get info reults 😎", results);
    }
  };

  componentDidMount() {
    // this.storePlaceId = (...placeIds) => {
    //   console.log("First Initial Results All 📌", placeIds);
    //   placeIds.map(() => {});
    // };
    // this.getDetails = result => {
    //   console.log("Individual Restaurants 📍", result);
    // };
  }

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
