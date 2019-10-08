import React, { Component, Fragment } from "react";
// import axios from 'axios';

import FilterBar from "./FilterBar";
import MapContainer from "./MapContainer/MapContainer";
import RestaurauntsList from "./RestaurantContainer/RestaurauntsList";

// import * as restarauntData from '../.././myrestauraunts.json';

class ResultsContainer extends Component {
  state = { lat: null, ln: null };
  componentDidMount() {
   
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
    return (
      <Fragment>
        <section className="app__filterBar">
          <FilterBar />
        </section>{" "}
        <main className="app__results-viewport">
          <section className="app__map">
            <div className="app__map-container">
              <MapContainer lat={this.state.lat} lng={this.state.lng} />{" "}
            </div>
          </section>
          <section className="app__results-column">
            <RestaurauntsList />
          </section>{" "}
        </main>{" "}
      </Fragment>
    );
  }
}

export default ResultsContainer;
