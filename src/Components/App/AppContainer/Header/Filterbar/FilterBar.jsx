import React from 'react';
import RatingsFilter from './RatingsFilter/RatingsFilter';
import './filterbar.css';
import LocationSearch from '../LocationSearch';
const FilterBar = ({ ratings, onRatingChecked, restaraunts, searchLatLng }) => {
  return (
    <section className="filterBar__wrapper">
      <section className="flex__ ml-4">
        <section className="filterBar--section-filters">
          <RatingsFilter
            label="Ratings"
            onRatingChecked={onRatingChecked}
            ratings={ratings}
            id={restaraunts.map(id => id.id)}
          />
        </section>
        <section className="filterBar--section-search">
          <section className="location-searchbox">
            <LocationSearch searchLatLng={searchLatLng} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default FilterBar;
