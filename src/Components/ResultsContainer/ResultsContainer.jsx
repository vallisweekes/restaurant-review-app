import React, { Component, Fragment } from "react";
// import axios from 'axios';

import FilterBar from "./FilterBar";
import MapContainer from "./MapContainer/MapContainer";
import RestaurauntsList from "./RestaurantContainer/RestaurauntsList";
// import RestList from "../../restList.json";
// import * as restarauntData from '../.././myrestauraunts.json';

class ResultsContainer extends Component {
  state = { lat: null, lon: null };
  UNSAFE_componentDidMount() {
    // console.log(RestList.results[0].geometry.location);
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
    // console.log("Component Did Render");
    return (
      <Fragment>
        <section className="app__filterBar">
          <FilterBar />
        </section>{" "}
        <main className="app__results-viewport">
          <section className="app__map">
            <div className="app__map-container">
              <MapContainer lat={51.59351} lon={-0.10257} />{" "}
            </div>{" "}
          </section>{" "}
          <section className="app__results-column">
            <RestaurauntsList />
          </section>{" "}
        </main>{" "}
      </Fragment>
    );
  }
}

export default ResultsContainer;
