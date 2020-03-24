import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const AuthorName = ({ name }) => {
  return (
    <Fragment>
      <p className="text-bold">{name}</p>
    </Fragment>
  );
};

AuthorName.propTypes = {
  name: PropTypes.string
};

export default AuthorName;
