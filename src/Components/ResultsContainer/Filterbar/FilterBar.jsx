import React from "react";

import OpenNow from "./OpenNow/OpenNow";
import RatingsFilter from "./RatingsFilter/RatingsFilter";

const FilterBar = props => {
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
