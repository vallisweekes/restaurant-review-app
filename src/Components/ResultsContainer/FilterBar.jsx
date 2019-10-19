import React from "react";

import OpenNow from "./OpenNow";
import RatingsFilter from "./RatingsFilter";

const FilterBar = () => {
  return (
    <section className="filterBar__wrapper">
      <div className="flex__">
        <OpenNow label="Open Now" />
      </div>
      <div className="flex__ ml-4">
        <RatingsFilter label="Ratings" />
      </div>
    </section>
  );
};

export default FilterBar;
