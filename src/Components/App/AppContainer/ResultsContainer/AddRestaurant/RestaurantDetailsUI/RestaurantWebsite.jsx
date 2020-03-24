import React, { Fragment } from 'react';

const RestaurantWebsite = ({
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
      <label htmlFor="website">Website</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors.website && touched.website ? <div>{errors.website}</div> : null}
    </Fragment>
  );
};

export default RestaurantWebsite;
