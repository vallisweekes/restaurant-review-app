import React, { Fragment } from 'react';
import './results-container.css';
import MapContainer from './Map/MapContainer';
import RestaurauntsList from './RestaurantContainer/RestaurantList/RestaurantsList';
import Container from './Modal/index';
import AddingRestaurantForm from './AddRestaurant/AddingRestaurantForm';
import mapStyles from '../../../../util/mapStyles';

const ResultsContainer = props => {
  const {
    lat,
    lng,
    googleMap,
    mapProps,
    myRestaurants,
    selectedRestaurant,
    showAddRestaurantForm,
    handleCloseRestaurant,
    onIconClick,
    onClose,
    activeMarker,
    selectedPlace,
    showInfoWindow,
    handleFormDisplay,
    handleCloseForm,
    showForm,
    showModal,
    hideModal,
    hoverState,
    setHoverState,
    onMouseLeave,
    setRating,
    reviewButtonControl,
    onReviewSubmit,
    addRestaurantOnMap,
    setHomeDefault,
    saveUserHomeLocation,
    handleHomeRestaurants,
    handleFavourite
  } = props;

  // console.log('Check reviews in Resultcontainer', reviews);
  const modalDetails =
    selectedRestaurant &&
    selectedRestaurant.map((details, i) => (
      <Container
        key={details.placeId || i}
        myRestaurants={myRestaurants}
        id={details.id}
        placeId={details.placeId}
        name={details.name}
        address={details.address}
        ratings={details.rating}
        phoneNumber={details.phoneNumber}
        website={details.website}
        reviews={details.reviews}
        customersPhoto={details.customersPhoto}
        location={details.location}
        openingHours={details.openingHours}
        hideModal={hideModal}
        handleFormDisplay={handleFormDisplay}
        handleCloseForm={handleCloseForm}
        showForm={showForm}
        hoverState={hoverState}
        onReviewSubmit={onReviewSubmit}
        setHoverState={setHoverState}
        onMouseLeave={onMouseLeave}
        setRating={setRating}
        reviewButtonControl={reviewButtonControl}
        selectedReview={props.reviews}
        selectedRestaurantObj={details}
        mapProps={mapProps}
        lat={lat}
        lng={lng}
      />
    ));

  const modalState = showModal
    ? 'modal--contianer display-block'
    : 'modal--contianer display-none';

  const formStateStyle = showAddRestaurantForm
    ? 'add--restaurant display-block'
    : 'add--restaurant display-none';

  // console.log(myRestaurants);
  return (
    <Fragment>
      {/* Modal*/}
      <section className={modalState}>{modalDetails}</section>
      <main className="app__results-viewport">
        <section className={formStateStyle}>
          <AddingRestaurantForm
            addRestaurantOnMap={addRestaurantOnMap}
            restarauntLength={myRestaurants.length}
            handleCloseRestaurant={handleCloseRestaurant}
          />
        </section>
        <section className="app__map">
          <div className="app__map-container" style={mapStyles}>
            <MapContainer
              lat={lat}
              lng={lng}
              googleMap={googleMap}
              restaraunts={myRestaurants}
              onIconClick={onIconClick}
              onClose={onClose}
              addMarker={props.addMarker}
              activeMarker={activeMarker}
              selectedPlace={selectedPlace}
              showInfoWindow={showInfoWindow}
              showDetails={props.showDetails}
              onMapReady={props.onMapReady}
            />
          </div>
        </section>
        <section className="app__results-column">
          <RestaurauntsList
            googleMap={googleMap}
            mapProps={mapProps}
            lat={lat}
            lng={lng}
            restarauntResults={props.myRestaurants}
            itemCount={props.itemCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onClose={onClose}
            activeMarker={activeMarker}
            onPageChange={props.onPageChange}
            onIconClick={props.onIconClick}
            onRestaurantClick={props.onRestaurantClick}
            onSort={props.onSort}
            showDetails={props.showDetails}
            setHomeDefault={setHomeDefault}
            saveUserHomeLocation={saveUserHomeLocation}
            handleHomeRestaurants={handleHomeRestaurants}
            handleFavourite={handleFavourite}
          />
        </section>
      </main>
    </Fragment>
  );
};

export default ResultsContainer;
