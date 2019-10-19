import React, { Fragment } from "react";
import Restauraunt from "./Restauraunt";
import Sort from "./Sort";

const RestaurauntsList = ({ data: results }) => {
  return (
    <Fragment>
      <section className="rest__container">
        <header className="rest__container-header">
          <div className="rest__results-info"> Showing results </div>{" "}
          <Sort label={"Sort"} />{" "}
        </header>{" "}
        <Restauraunt data={results} reviewText="Customer Review" />
      </section>{" "}
    </Fragment>
  );
};

export default RestaurauntsList;
