import React, { Fragment } from 'react';

const PhoneNumberInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  errors,
  touched
}) => {
  return (
    <Fragment>
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors.phoneNumber && touched.phoneNumber ? (
        <div>{errors.phoneNumber}</div>
      ) : null}
    </Fragment>
  );
};

export default PhoneNumberInput;
