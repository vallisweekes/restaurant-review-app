import React, { Component } from "react";
import Header from "./Components/Header/Header";
import ResultsContainer from "./Components/ResultsContainer/ResultsContainer";

class AppContainer extends Component {
  state = { lat: null, lng: null };
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
      <div className="container-fluid app__containter">
        <header className="app__container-header">
          <Header />
        </header>
        <main className="app__container-results">
          <ResultsContainer lat={this.state.lat} lng={this.state.lng} />
        </main>
      </div>
    );
  }
}

export default AppContainer;
