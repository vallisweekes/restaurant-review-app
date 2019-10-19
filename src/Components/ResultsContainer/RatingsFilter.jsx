import React from "react";
// import PropTypes from 'prop-types';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

class RatingsFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrowDown: true,
      showItems: false
    };
  }

  render() {
    // console.log(this.props);
    return (
      <button className=" btn btn__style" type="button">
        {this.props.label}
        {this.state.arrowDown ? (
          <span>
            <ArrowDropDownIcon> ArrowDropDownIcon </ArrowDropDownIcon>
          </span>
        ) : (
          <ArrowDropUpIcon> ArrowDropUpIcon </ArrowDropUpIcon>
        )}
      </button>
    );
  }
}

export default RatingsFilter;
