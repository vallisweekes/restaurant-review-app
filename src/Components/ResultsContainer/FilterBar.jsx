import React from "react";

import OpenNow from "./OpenNow";
import RatingsFilter from "./RatingsFilter";

const FilterBar = props => {
  console.log(" Filter Bar Controlled Props", props);
  const { onStarSelect, ratings } = props;
  return (
    <section className="filterBar__wrapper">
      <div className="flex__">
        <OpenNow label="Open Now" />
      </div>
      <div className="flex__ ml-4">
        <RatingsFilter
          label="Ratings"
          onStarSelect={onStarSelect}
          ratings={ratings}
        />
      </div>{" "}
    </section>
  );
};

export default FilterBar;
