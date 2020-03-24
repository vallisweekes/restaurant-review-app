import React, { Fragment } from 'react';

const RestaurantNameInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  errors,
  touched
}) => {
  return (
    <Fragment>
      <label htmlFor="restaurantName">Restaurant Name</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors.restaurantName && touched.restaurantName ? (
        <div>{errors.restaurantName}</div>
      ) : null}
    </Fragment>
  );
};

export default RestaurantNameInput;
