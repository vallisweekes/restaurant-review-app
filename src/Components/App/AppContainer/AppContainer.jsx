import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app-container.css';
import { paginate } from '../../../util/paginate';
import Header from './Header/Header';
import LoadingIndicator from './ResultsContainer/LoadingIndicator/LoadingIndicator';
import Container from './ResultsContainer/index';
import Popup from './Popup/Popup';
import _ from 'lodash';

class AppContainer extends Component {
  state = {
    googleResults: [],
    myRestaurants: [],
    currentPage: 1,
    pageSize: 10,
    ratings: [5, 4, 3, 2, 1],
    isChecked: false,
    ratingValue: [],

    sortItem: { path: 'name', order: 'asc' },
  };

  static propTypes = {
    myRestaurants: PropTypes.array,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
  };

  componentDidMount() {
    // console.log('component did mount', this.props);
    this.setState({
      myRestaurants: [this.props.restaurantResults],
    });
  }

  //FilterRating Handler
  handleRatings = (rating, e) => {
    const ratingValue = this.state.ratingValue;
    this.setState({
      isChecked: e.target.checked,
    });
    if (e.target.checked) {
      ratingValue.push(rating);
      this.setState({
        ratingValue: ratingValue,
      });
    } else if (ratingValue.includes(rating)) {
      ratingValue.splice(ratingValue.indexOf(rating), 1);
      this.setState({
        ratingValue: ratingValue,
      });
    }
  };

  handleFavourite = (restaurant) => {
    const restaurants = [...this.state.restaurants];
    const index = restaurants.indexOf(restaurant);
    restaurants[index] = { ...restaurants[index] };
    restaurants[index].favourite = !restaurants[index].favourite;
    this.setState({
      restaurants,
      favourites: restaurants.filter((result) => result.favourite === true),
    });

    restaurants.filter((result) => result.favourite === true);
  };
  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleSort = (path) => {
    const sortItem = { ...this.state.sortItem };

    if (sortItem.path === path) {
      sortItem.order = sortItem.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortItem.path = path;
      sortItem.order = 'asc';
    }
    this.setState({ sortItem });
  };

  render() {
    const {
      pageSize,
      currentPage,
      ratings,
      ratingValue,
      sortItem,
    } = this.state;

    const {
      lat,
      lng,
      restaurantResults,
      googleMap,
      selectedRestaurant,
      showAddRestaurantForm,
      handleCloseRestaurant,
      searchLatLng,
      data,
      hoverState,
      setHoverState,
      onMouseLeave,
      setRating,
      reviewButtonControl,
      onReviewSubmit,
      addRestaurantOnMap,
      setHomeDefault,
      showPopUp,
      handleCLosePopUp,
      saveUserHomeLocation,
      handleHomeRestaurants,
      handleFavourite,
      mapProps,
    } = this.props;

    const { length: count } = this.props.restaurantResults;

    // Filtering Restaurant
    const filtered =
      ratingValue.length !== 0
        ? restaurantResults.filter((result) => {
            return ratingValue.includes(result.rating);
          })
        : restaurantResults;

    // Sorting Restaurant
    const sorted = _.orderBy(filtered, [sortItem.path], [sortItem.order]);

    //FAVOURITE
    sorted.forEach((item, i) => {
      if (item.favourite === true) {
        sorted.splice(i, 1);
        sorted.unshift(item);
      }
    });

    //PAGINATION
    const restaraunts = paginate(sorted, currentPage, pageSize);

    return (
      <div className="app__containter" onClick={handleCLosePopUp}>
        {showPopUp ? <Popup setHomeDefault={setHomeDefault} /> : null}
        <Header
          searchLatLng={searchLatLng}
          lat={lat}
          lng={lng}
          onRatingChecked={this.handleRatings}
          restaraunts={restaraunts}
          ratings={ratings}
        />

        <main className="app__container-results conatainer-fluid">
          {/* TODO: Fix Loading Container */}

          {!(count >= 60) ? (
            <LoadingIndicator />
          ) : !(count >= 30) ? (
            <LoadingIndicator />
          ) : (
            <Container
              lat={lat}
              lng={lng}
              googleMap={googleMap}
              mapProps={mapProps}
              myRestaurants={restaraunts}
              itemCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              ratings={ratings}
              onPageChange={this.handlePageChange}
              onSort={this.handleSort}
              addMarker={this.props.addMarker}
              showAddRestaurantForm={showAddRestaurantForm}
              handleCloseRestaurant={handleCloseRestaurant}
              showDetails={this.props.showDetails}
              showModal={this.props.showModal}
              hideModal={this.props.hideModal}
              data={data}
              setHoverState={setHoverState}
              onMouseLeave={onMouseLeave}
              setRating={setRating}
              hoverState={hoverState}
              onReviewSubmit={onReviewSubmit}
              addRestaurantOnMap={addRestaurantOnMap}
              onMapReady={this.props.onMapReady}
              selectedRestaurant={selectedRestaurant}
              searchLatLntLng={this.searchLatLntLng}
              reviewButtonControl={reviewButtonControl}
              saveUserHomeLocation={saveUserHomeLocation}
              handleHomeRestaurants={handleHomeRestaurants}
              handleFavourite={handleFavourite}
            />
          )}
        </main>
      </div>
    );
  }
}

export default AppContainer;
