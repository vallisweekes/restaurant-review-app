import React, { Fragment, Component } from "./node_modules/react";
import { paginate } from "../../util/paginate";

class ResultsContainer extends Component {
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
  }

  handleRatings() {
    console.log(this.state.ratings);
  }

  handleOpenNowFilter() {}

  handlePageChange(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    console.log("Render meth Results Container", this.state);
    const {
      googleRestaurants: allRestaruants,
      ratings,
      pageSize,
      currentPage
    } = this.state;

    const restaraunts = paginate(allRestaruants, currentPage, pageSize);

    const { lat, lng } = this.props;
    return <Fragment></Fragment>;
  }
}

export default ResultsContainer;
