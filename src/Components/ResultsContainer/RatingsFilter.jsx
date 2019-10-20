import React, { Fragment } from "react";
import RatingsFilterItems from "./RatingsFilterItems";
// import PropTypes from 'prop-types';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

class RatingsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: false
    };
    this.onShowItems = this.onShowItems.bind(this);
  }

  onShowItems() {
    this.setState(state => ({
      showItems: !state.showItems
    }));
  }

  render() {
    console.log("Ratings Filter", this.props);
    return (
      <Fragment>
        <button
          className=" btn btn__style"
          type="button"
          onClick={this.onShowItems}
        >
          {this.props.label}{" "}
          {this.state.showItems ? (
            <span>
              <ArrowDropUpIcon> ArrowDropUpIcon </ArrowDropUpIcon>{" "}
            </span>
          ) : (
            <ArrowDropDownIcon> ArrowDropDownIcon </ArrowDropDownIcon>
          )}{" "}
        </button>{" "}
        <div
          className="ratings__dropdown-background"
          style={{ display: this.state.showItems ? "block" : "none" }}
        >
          <div className="ratings__dropdown-menu">
            {" "}
                   
            <RatingsFilterItems
              onSelectedNum={this.props.selectedRating}
              onStarSelect={this.props.onStarSelect}
              ratings={this.props.ratings}
            />
          </div>{" "}
        </div>{" "}
      </Fragment>
    );
  }
}

export default RatingsFilter;
