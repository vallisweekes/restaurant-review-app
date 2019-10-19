import React, { Fragment, Component } from "react";
import RestList from "../../restList.json";
import FilterBar from "./FilterBar";
import MapContainer from "./MapContainer/MapContainer";
import RestaurauntsList from "./RestaurantContainer/RestaurauntsList";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({
      data: RestList
    });
  }
  render() {
    const { results } = this.state.data;
    console.log(results);
    const { lat, lng } = this.props;
    return (
      <Fragment>
        <section className="app__filterBar">
          <FilterBar />
        </section>
        <main className="app__results-viewport">
          <section className="app__map">
            <div className="app__map-container">
              <MapContainer lat={lat} lng={lng} data={RestList} />
            </div>
          </section>
          <section className="app__results-column">
            <RestaurauntsList
              data={RestList}
              resultsLenght={RestList.results.length}
            />
          </section>
        </main>
      </Fragment>
    );
  }
}

export default ResultsContainer;
