import React, { Fragment } from "react";
import "./results-container.css";
import FilterBar from "./Filterbar/FilterBar";
import MapContainer from "./Map/MapContainer";
import RestaurauntsList from "./RestaurantContainer/RestaurantList/RestaurantsList";

const ResultsContainer = props => {
  console.log("Results Recieve AppContainer Props", props);
  return (
    <Fragment>
      <section className="app__filterBar">
        <FilterBar
          onStarSelect={props.handleRatings}
          // onSelectedNum={selectedRating}
          ratings={props.ratings}
        />
      </section>{" "}
      <main className="app__results-viewport">
        <section className="app__map">
          <div className="app__map-container">
            <MapContainer
              lat={props.lat}
              lng={props.lng}
              restaraunts={props.myRestaurants}
              fetchPlaces={props.fetchPlaces}
            />
          </div>{" "}
        </section>{" "}
        <section className="app__results-column">
          <RestaurauntsList
            restarauntResults={props.myRestaurants}
            // restarauntTotal={.length}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChange={props.onPageChange}
          />
        </section>
      </main>
    </Fragment>
  );
};

export default ResultsContainer;
