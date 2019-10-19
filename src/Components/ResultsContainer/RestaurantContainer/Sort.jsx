import React, { Component } from "react";

export default class Sort extends Component {
  render() {
    return (
      <div>
        {" "}
        <button> {this.props.label} </button>{" "}
      </div>
    );
  }
}
