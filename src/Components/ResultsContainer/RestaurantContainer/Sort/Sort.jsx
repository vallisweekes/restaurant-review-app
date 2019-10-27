import React, { Fragment } from "react";
import SortItems from "./SortItems";
// import PropTypes from 'prop-types';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import "./sort.css";
class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSortItems: false
    };
    this.onShowSort = this.onShowSort.bind(this);
  }

  onShowSort() {
    this.setState(state => ({
      showSortItems: !state.showSortItems
    }));
  }

  render() {
    // console.log(this.props);
    return (
      <Fragment>
        <div>
          <button
            className=" btn btn__style"
            type="button"
            onClick={this.onShowSort}
          >
            {this.props.label}
            {this.state.showItems ? (
              <span>
                <ArrowDropUpIcon> ArrowDropUpIcon </ArrowDropUpIcon>{" "}
              </span>
            ) : (
              <ArrowDropDownIcon> ArrowDropDownIcon </ArrowDropDownIcon>
            )}
          </button>
          <div
            className="sort__dropdown-menu"
            style={{ display: this.state.showSortItems ? "block" : "none" }}
          >
                   
            <SortItems />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Sort;
