import React, { Fragment, Component } from "react";
import { getRestRatings } from "../../modules/getRatings";
import { getRestaraunts } from "../../modules/getRestaraunts";
import { paginate } from "../../utils/paginate";
import FilterBar from "./FilterBar";
import MapContainer from "./MapContainer/MapContainer";
import RestaurauntsList from "./RestaurantContainer/RestaurauntsList";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: getRestRatings(),
      restaraunts: getRestaraunts(),
      currentPage: 1,
      pageSize: 5
    };

    this.handleRatings = this.handleRatings.bind(this);
    this.handleOpenNowFilter = this.handleOpenNowFilter.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleRatings(ratings) {
    // console.log(starRatingNum);
  }

  handleOpenNowFilter() {}

  handlePageChange(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    const {
      restaraunts: allRestaruants,
      ratings,
      pageSize,
      currentPage
    } = this.state;

    const restaraunts = paginate(allRestaruants, currentPage, pageSize);

    const { lat, lng } = this.props;
    return (
      <Fragment>
        <section className="app__filterBar">
          <FilterBar
            onStarSelect={this.handleRatings}
            // onSelectedNum={selectedRating}
            ratings={ratings}
          />
        </section>{" "}
        <main className="app__results-viewport">
          <section className="app__map">
            <div className="app__map-container">
              <MapContainer lat={lat} lng={lng} restaraunts={restaraunts} />
            </div>{" "}
          </section>{" "}
          <section className="app__results-column">
            <RestaurauntsList
              restarauntResults={restaraunts}
              restarauntTotal={allRestaruants.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </section>
        </main>
      </Fragment>
    );
  }
}

export default ResultsContainer;
