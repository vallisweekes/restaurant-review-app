import React from 'react';
import PropTypes from 'prop-types';

const ModalRestaurantWeb = ({ website, name }) => {
  return (
    <section className="text-small m--botom-20 web">
      <a href={website} target="_blank" rel="noreferrer noopener" title={name}>
        <div>Website</div>
      </a>
    </section>
  );
};

ModalRestaurantWeb.propTypes = {
  website: PropTypes.string,
  name: PropTypes.string
};

export default ModalRestaurantWeb;
