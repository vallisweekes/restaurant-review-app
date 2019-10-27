import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import "./app-container.css";
import { paginate } from "../../util/paginate";
import Header from "../Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
// import { getGeoLocation } from "./util/geoLocation";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 5,
      ratings: [5, 4, 3, 2, 1]
    };

    this.handleRatings = this.handleRatings.bind(this);
    this.handleOpenNowFilter = this.handleOpenNowFilter.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.storeRestaurants = this.storeRestaurants.bind(this);
  }

  componentDidMount() {}

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

  handleRatings() {
    console.log(this.state.ratings);
  }
  storeRestaurants = gPlacesRestaurants => {
    this.setState({
      googleRestaurants: gPlacesRestaurants
    });
  };
  handleOpenNowFilter() {}

  handlePageChange(page) {
    this.setState({
      currentPage: page
    });
  }

  storeRestaurants(rest) {
    console.log(rest);
  }
  render() {
    const { google } = this.props;

    const {
      googleRestaurants: allRestaruants,

      pageSize,
      currentPage
    } = this.state;

    const restaraunts = paginate(allRestaruants, currentPage, pageSize);
    console.log(restaraunts);
    console.log("App container props recieve", this.props);
    return (
      <div className="container-fluid app__containter">
        <header className="app__container-header">
          <Header />
        </header>
        <main className="app__container-results">
          <ResultsContainer
            lat={this.props.lat}
            lng={this.props.lng}
            googlgeAPi={google}
          />
        </main>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8Byy23oFligL0X1_WQYca0ABneIhxOow"
})(AppContainer);
