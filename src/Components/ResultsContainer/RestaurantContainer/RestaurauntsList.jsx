import React, { Fragment } from "react";
import Restauraunt from "./Restauraunt";

const RestaurauntsList = ({ data: results }) => {
  return (
    <Fragment>
      <section className="rest__container">
        <Restauraunt data={results} />{" "}
      </section>{" "}
    </Fragment>
  );
};

export default RestaurauntsList;
