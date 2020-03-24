import React, { Fragment } from 'react';

const RestaurantAddress = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  errors,
  touched
}) => {
  return (
    <Fragment>
      <label htmlFor="address">Address</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors.address && touched.address ? <div>{errors.address}</div> : null}
    </Fragment>
  );
};

export default RestaurantAddress;
