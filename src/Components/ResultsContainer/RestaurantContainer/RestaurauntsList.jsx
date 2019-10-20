import React, { Fragment } from "react";
import Restauraunt from "./Restauraunt";
import Pagination from "./Pagination";
import Sort from "./Sort";

const RestaurauntsList = props => {
  const {
    restarauntResults,
    restarauntTotal,
    pageSize,
    currentPage,
    onPageChange
  } = props;

  return (
    <Fragment>
      <section className="rest__container">
        <header className="rest__container-header">
          <div className="rest__results-info">
            Showing {restarauntTotal} of results
          </div>
          <Pagination
            itemsCount={restarauntTotal}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
          <Sort label={"Sort"} />
        </header>
        <Restauraunt
          restarauntResults={restarauntResults}
          reviewText="Customer Review"
        />
      </section>
    </Fragment>
  );
};

export default RestaurauntsList;
