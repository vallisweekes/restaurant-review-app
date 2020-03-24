import React, { Component, Fragment } from 'react';
import Modal from './Modal';

// import PropTypes from 'prop-types';

class Container extends Component {
  render() {
    return (
      <Fragment>
        <Modal {...this.props} />
      </Fragment>
    );
  }
}

// Container.propTypes = {};

export default Container;
