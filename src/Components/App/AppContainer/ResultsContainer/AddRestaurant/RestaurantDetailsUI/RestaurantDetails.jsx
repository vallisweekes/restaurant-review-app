import React, { Fragment } from 'react';
import RestaurantNameInput from './RestaurantNameInput';
import RestaurantAddress from './RestaurantAddress';
import PhoneNumberInput from './PhoneNumberInput';
import RestaurantWebsite from './RestaurantWebsite';
import Photo from './Photo';
const RestaurantDetails = ({
  TypeText,
  restaurantName,
  restaurantValue,
  restaurantPlaceholder,
  addressName,
  addressValue,
  addressPlaceholder,
  phoneNumberName,
  phoneNumberPlaceholder,
  phoneNumberValue,
  websiteName,
  websitePlaceholder,
  websiteValue,
  onChange,
  onBlur,
  errors,
  touched
}) => {
  console.log(errors);
  return (
    <Fragment>
      <section className="restaurant-details form-flex-column">
        <h3>Restaurant Details</h3>
        <RestaurantNameInput
          touched={touched}
          errors={errors}
          type={TypeText}
          name={restaurantName}
          value={restaurantValue}
          placeholder={restaurantPlaceholder}
          onChange={onChange}
          onBlur={onBlur}
        />

        <RestaurantAddress
          touched={touched}
          errors={errors}
          type={TypeText}
          name={addressName}
          placeholder={addressPlaceholder}
          value={addressValue}
          onChange={onChange}
          onBlur={onBlur}
        />

        <PhoneNumberInput
          touched={touched}
          errors={errors}
          type={TypeText}
          name={phoneNumberName}
          placeholder={phoneNumberPlaceholder}
          phoneNumberValue={phoneNumberValue}
          onChange={onChange}
          onBlur={onBlur}
        />

        <RestaurantWebsite
          touched={touched}
          errors={errors}
          type={TypeText}
          name={websiteName}
          placeholder={websitePlaceholder}
          value={websiteValue}
          onChange={onChange}
          onBlur={onBlur}
        />

        <Photo onChange={onChange} />
      </section>
    </Fragment>
  );
};

export default RestaurantDetails;
