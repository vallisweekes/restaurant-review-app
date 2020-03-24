import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import moment from 'moment';
import formValidationSchema from '../../../../../../util/formValidation';
import Input from './Input';
import InputText from './InputText';
import CancelButton from './CancelButton';
import AddButton from './AddButton';
import StarRating from './StarRating';
import './form.css';
import defaultProfilePic from '../../../../../../util/defaultProfilePic';
class ReviewForm extends Component {
  state = {
    rating: 0
  };

  // Collecting star Rating data

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };
  render() {
    const {
      handleCloseForm,
      name,
      onReviewSubmit,
      selectedRestaurantObj
    } = this.props;
    const { rating } = this.state;
    console.log(this.state.rating);

    return (
      <Formik
        initialValues={{
          name: '',
          text: ''
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            onReviewSubmit(selectedRestaurantObj, {
              author_name: values.name,
              author_url: 'https//www.facebook.com',
              language: navigator.language,
              profile_photo_url: defaultProfilePic,
              rating: rating,
              relative_time_description: (function setElapseTime() {
                return moment()
                  .startOf('min')
                  .fromNow();
              })(),
              text: values.text,
              time: '1234555'
            });

            setSubmitting(false);
            this.setState({ rating: 0 });
            resetForm();
            handleCloseForm();
          }, 2000);
        }}
      >
        {({ handleChange, values, errors, handleBlur, isSubmitting }) => (
          <main className="modal-form">
            <Form className="modal--form-inner">
              <div className="text-align-centre">
                <h1>{name}</h1>
              </div>

              <h2>Add Review</h2>
              <StarRating
                rating={this.state.rating}
                handleRating={this.onStarClick}
              />

              <section className="name">
                <Input
                  name="name"
                  value={values.name}
                  label="Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name}
                />
              </section>
              <section className="review">
                <InputText
                  name="text"
                  value={values.text}
                  label="Write Your Review"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.text}
                />
              </section>
              <footer className="review-footer">
                <CancelButton handleCloseForm={handleCloseForm} />
                <AddButton disable={isSubmitting} />
              </footer>
            </Form>
          </main>
        )}
      </Formik>
    );
  }
}

export default ReviewForm;
