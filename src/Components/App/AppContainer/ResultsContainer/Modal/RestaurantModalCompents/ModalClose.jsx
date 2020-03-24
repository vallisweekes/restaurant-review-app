import React from 'react';
import PropTypes from 'prop-types';

const ModalClose = ({ hideModal }) => {
  return <div className="modal-close" onClick={hideModal}></div>;
};

ModalClose.propTypes = {
  onClick: PropTypes.func
};
export default ModalClose;
