import React, { Component } from "react";

class RatingsFilterItems extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onDropDown = () => {};
  render() {
    const starRatingNum = [1, 2, 3, 4, 5];
    return (
      <ul>
        {starRatingNum.map(ratingNum => (
          <li key={ratingNum}>
            <div>
              <input type="checkbox" />
              {ratingNum}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default RatingsFilterItems;
