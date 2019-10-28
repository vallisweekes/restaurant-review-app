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

    this.handleOpenNowFilter = this.handleOpenNowFilter.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  fetchPlaces = (mapProps, map) => {
    const { google } = mapProps;
    const userLocation = new google.maps.LatLng(this.props.lat, this.props.lng);
    const request = {
      location: userLocation,
      radius: "900",
      type: ["restaurant"]
    };

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, getPlaces);

    function getPlaces(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const place = Array.from(results);
        console.log("Places returned from GAPI", place);
        const placeId = place.map(placeResult => placeResult.id);
        for (let i = 0; i < placeId.length; i++) {
          const request = {
            placeId: placeId[i],
            fields: ["name", "rating", "opening_hours", "reviews"]
          };
          console.log("Request detail for each places", request);
          const service = new google.maps.places.PlacesService(map);
          service.getDetails(request, getReviews);
          function getReviews(review, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              console.log("Reviews Return", review);
            }
          }
        }

        // for (let i = 0; i < place.length; i++) {
        //   console.log(place[i]);
        // }
      }
    }
  };

  // storeRestaurants = gPlacesRestaurants => {
  //   console.log("G Results", gPlacesRestaurants);
  // };

  onIconClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  handleRatings = () => {
    console.log(this.state.ratings);
  };

  componentDidMount() {
    // this.setState({
    //   myRestaurants:
    // });
  }

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
  apiKey: "AIzaSyA8Byy23oFligL0X1_WQYca0ABneIhxOow"
})(AppContainer);
