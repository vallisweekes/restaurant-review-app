import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import RestaurantDetails from './RestaurantDetailsUI/RestaurantDetails';
import './addForm.css';
import addRestaurantValidation from '../../../../../util/addRestaurantValidation';
const ImageUrl = 'https://www.vallisweekes.com/img/noimage.jpg';
class AddingRestaurantForm extends Component {
  state = {
    page: 0
  };

  render() {
    const { addRestaurantOnMap, handleCloseRestaurant } = this.props;

    return (
      <Formik
        initialValues={{
          restaurantName: '',
          address: '',
          reviews: [{}],
          photos: '',
          restPhoneNumber: '',
          website: '',
          rating: '',
          totalRatings: ''
        }}
        validationSchema={addRestaurantValidation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            addRestaurantOnMap({
              id:
                Math.random()
                  .toString(36)
                  .substring(2, 15) +
                Math.random()
                  .toString(36)
                  .substring(2, 15),
              location: { lat: 0, lng: 0 },
              name: values.restaurantName,
              photos: ImageUrl,
              placeId:
                Math.random()
                  .toString(36)
                  .substring(2, 15) +
                Math.random()
                  .toString(36)
                  .substring(2, 15),
              address: values.address,
              phone: values.restPhoneNumber,
              customersPhoto: [
                'https://www.vallisweekes.com/img/nocustomerimage.jpg'
              ],
              rating: 0,
              openingHours: {},
              reviews: [],
              website: values.website,
              favourite: false
            });
            setSubmitting(false);
            resetForm();
          }, 2000);
        }}
      >
        {({
          handleChange,
          values,
          errors,
          touched,
          handleBlur,
          isSubmitting
        }) => (
          <Form className="add--restaurant-wrapper">
            <RestaurantDetails
              errors={errors}
              touched={touched}
              TypeText="text"
              restaurantName="restaurantName"
              restaurantValue={values.restaurantName}
              restaurantPlaceholder="Enter restaurant name"
              addressName="address"
              addressValue={values.address}
              addressPlaceholder="Enter address"
              phoneNumberName="restPhoneNumber"
              phoneNumberPlaceholder="0208 000 0000"
              phoneNumberValue={values.restPhoneNumber}
              websiteName="website"
              websitePlaceholder="Enter your website"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <footer className="footer--wrap">
              <button
                className="form-btn cancel"
                type="button"
                onClick={handleCloseRestaurant}
              >
                Cancel
              </button>
              <button className="form-btn submit" type="submit">
                Submit
              </button>
            </footer>
          </Form>
        )}
      </Formik>
    );
  }
}

AddingRestaurantForm.propTypes = {};

export default AddingRestaurantForm;
