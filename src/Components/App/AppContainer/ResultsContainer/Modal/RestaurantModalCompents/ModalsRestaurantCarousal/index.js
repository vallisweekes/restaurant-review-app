import React, { Component, Fragment } from 'react';
import ModalRestaurantCarousal from './ModalRestaurantCarousal';
import PropTypes from 'prop-types';

class Photos extends Component {
  render() {
    const photosData = this.props.photos.map(photo => {
      return { src: photo, width: photo.width, height: photo.height };
    });
    return (
      <Fragment>{<ModalRestaurantCarousal photosData={photosData} />}</Fragment>
    );
  }
}

Photos.propTypes = {
  photos: PropTypes.array
};

export default Photos;
