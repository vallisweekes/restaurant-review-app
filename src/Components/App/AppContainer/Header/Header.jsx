import React, { Fragment } from 'react';
import FilterBar from './Filterbar/FilterBar';
import './header.css';

const Header = (props) => {
  const { searchLatLng, onRatingChecked, restaraunts, ratings } = props;
  return (
    <Fragment>
      <header className="app--header-container">
        <section className="app--header-inner">
          <section className="app--header-content">
            <div className="app-header-text">
              <h1>Eat Anywhere Worldwide</h1>
            </div>
          </section>
        </section>
        <section className="app__filterBar">
          <FilterBar
            onRatingChecked={onRatingChecked}
            restaraunts={restaraunts}
            ratings={ratings}
            searchLatLng={searchLatLng}
          />
        </section>
      </header>
    </Fragment>
  );
};

export default Header;
