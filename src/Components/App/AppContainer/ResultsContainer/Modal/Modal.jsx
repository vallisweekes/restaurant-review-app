import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
import ReviewForm from './ReviewForm/ReviewForm';
import ModalClose from './RestaurantModalCompents/ModalClose';
import ModalRestaurantName from './RestaurantModalCompents/ModalRestaurantName';
import StarRating from './RestaurantModalCompents/StarRating';
import ModalRestaurantRatings from './RestaurantModalCompents/ModalRestaurantName';
import RestaurantModalStreetView from './RestaurantModalCompents/RestaurantModalStreetView';
import ModalRestaurantDetails from './RestaurantModalCompents/ModalRestaurantDetails';
import RestaurantModalReviews from './RestaurantModalCompents/RestaurantModalReviews';
import ModalRestaurantWeb from './RestaurantModalCompents/ModalRestaurantWeb';
import Photos from './RestaurantModalCompents/ModalsRestaurantCarousal/index';
import './modal.css';

class Modal extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  render() {
    const {
      id,
      placeId,
      name,
      address,
      phoneNumber,
      website,
      handleFormDisplay,
      handleCloseForm,
      showForm,
      customersPhoto,
      location,
      openingHours,
      hideModal,
      reviews,
      ratings,
      onReviewSubmit,
      setRating,
      reviewButtonControl,
      selectedRestaurantObj,
    } = this.props;
    // console.log('Reviews ', selectedReview);
    const showFormDisplay = showForm
      ? 'modal--form-container display-block'
      : 'modal--form-container display-none';

    return (
      <Fragment>
        <section className={showFormDisplay}>
          <ReviewForm
            name={name}
            handleCloseForm={handleCloseForm}
            setRating={setRating}
            reviewButtonControl={reviewButtonControl}
            id={id}
            onReviewSubmit={onReviewSubmit}
            selectedRestaurantObj={selectedRestaurantObj}
          />
        </section>

        <main id={placeId} className="modal--contianer-inner" ref={this.myRef}>
          <ModalClose hideModal={hideModal} />
          <header className="modal--container-header">
            <ModalRestaurantName name={name} />
            <StarRating ratings={ratings} />

            <ModalRestaurantWeb website={website} name={name} />

            <ModalRestaurantRatings ratings={ratings} />
            <RestaurantModalStreetView name={name} location={location} />
          </header>
          <ModalRestaurantDetails
            openingHours={openingHours}
            address={address}
            phoneNumber={phoneNumber}
            website={website}
          />
          <section className="modal--contianer-slide">
            <Photos photos={customersPhoto} name={name} />
          </section>
          <section className="modal--review-wrapper">
            <RestaurantModalReviews
              handleAddReview={this.handleAddReview}
              reviews={reviews}
              handleFormDisplay={handleFormDisplay}
            />
          </section>
        </main>
      </Fragment>
    );
  }
}

export default Modal;
