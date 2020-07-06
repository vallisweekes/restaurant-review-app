import React from 'react';
import RestaurantModalHours from './ModalRestaurantHours/ModalRestaurantHours';
// import PropTypes from 'prop-types';

const ModalRestaurantDetails = ({ address, phoneNumber, openingHours }) => {
  return (
    <div className="modal--container-body">
      <address className="text-small">
        <span className="text-bold">Address: </span>
        {address}
      </address>
      <RestaurantModalHours openingHours={openingHours} />
      <section className="text-small">
        <span className="text-bold">Phone: </span>
        {phoneNumber}
      </section>
    </div>
  );
};


export default ModalRestaurantDetails;
