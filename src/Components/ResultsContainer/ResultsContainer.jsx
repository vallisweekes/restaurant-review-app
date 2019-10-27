import React, { Fragment } from "react";
import "./results-container.css";
import FilterBar from "./Filterbar/FilterBar";
import MapContainer from "./Map/MapContainer";
import RestaurauntsList from "./RestaurantContainer/RestaurantList/RestaurantsList";

const ResultsContainer = props => {
  console.log("Results Recieve Props", props);
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
              restaraunts={props.restaraunts}
              storeRestaurants={props.storeRestaurants}
            />
          </div>{" "}
        </section>{" "}
        <section className="app__results-column">
          <RestaurauntsList
            restarauntResults={props.restaraunts}
            // restarauntTotal={allRestaruants.length}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChange={props.handlePageChange}
          />
        </section>
      </main>
    </Fragment>
  );
};

export default ResultsContainer;
