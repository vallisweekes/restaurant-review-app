import React, { Fragment } from 'react';
// import Modal from './Modal/Modal';
import RestaurantImage from './RestaurantInfo/RestaurantImage';
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';

import './restaurant.css';
const Restauraunt = props => {
  // console.log('What is show details here', googleMap);

  return (
    <Fragment>
      <RestaurantImage
        handleFavourite={props.handleFavourite}
        restaurauntObject={props.restaurauntObject}
        favourite={props.favourite}
        restaurantImage={props.restaurantImage}
        restaurantName={props.restaurantName}
        placeId={props.placeId}
      />

      <RestaurantInfo {...props} />
    </Fragment>
  );
};

export default Restauraunt;
