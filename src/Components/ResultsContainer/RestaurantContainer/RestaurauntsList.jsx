import React, { Component, Fragment } from "react";
import Restauraunt from "./Restauraunt";

class RestaurauntsList extends Component {
  // constructor() {
  // 	super();
  // }

  render() {
    return (
      <Fragment>
        <section>
          <div className="restauraunt__container">
            <Restauraunt />
          </div>{" "}
        </section>{" "}
      </Fragment>
    );
  }
}

export default RestaurauntsList;
