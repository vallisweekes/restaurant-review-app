import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onChange, name, error, label, onBlur }) => {
  return (
    <Fragment>
      <label htmlFor={name}>
        <b>{label}</b>
      </label>
      <input
        id={name}
        autoFocus
        type="text"
        placeholder="Enter name"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </Fragment>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
