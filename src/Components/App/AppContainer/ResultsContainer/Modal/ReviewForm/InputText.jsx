import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, name, error, label, onBlur, onChange }) => {
  return (
    <Fragment>
      <label htmlFor={name}>
        <b>{label}</b>
      </label>
      <div>
        <textarea
          className="review-textarea"
          id={name}
          type="text"
          placeholder="Tell us what you think"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        ></textarea>
      </div>
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
