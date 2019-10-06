import React, { Component, Fragment } from "react";
// import axios from 'axios';

import FilterBar from "./FilterBar";
import MapContainer from "./MapContainer/MapContainer";
import RestaurauntsList from "./RestaurantContainer/RestaurauntsList";
import RestList from "../../restList.json";
// import * as restarauntData from '../.././myrestauraunts.json';

class ResultsContainer extends Component {
  state = { lat: null, lon: null };

  componentDidMount() {
    console.log(RestList.results[0].geometry.location);
    // console.log('Component Did Mount');
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
    this.setState({});

    // fetch(`../../restList.json`)
    //   .then(res => console.log(res.json()))
    //   .catch(err => console.log(err));
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
              <div className="Map__map">
                <MapContainer lat={this.state.lat} lon={this.state.lon} />
              </div>
            </div>
          </section>
          <section className="app__results-column">
            <RestaurauntsList />
          </section>
        </main>
      </Fragment>
    );
  }
}

export default ResultsContainer;
