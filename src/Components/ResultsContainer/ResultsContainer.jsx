import React, { Fragment } from "react";
import RestList from "../../restList.json";
import FilterBar from "./FilterBar";
import MapContainer from "./MapContainer/MapContainer";
import RestaurauntsList from "./RestaurantContainer/RestaurauntsList";

const ResultsContainer = ({ lat, lng }) => {
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
          <RestaurauntsList data={RestList} />
        </section>
      </main>
    </Fragment>
  );
};

export default ResultsContainer;
