import React, { Component } from 'react';
import { Formik } from 'formik';

import Input from './Input';
import InputText from './InputText';
import CancelButton from './CancelButton';
import AddButton from './AddButton';
import Star from './Star';
import './form.css';
import defaultProfilePic from '../../../../../../util/defaultProfilePic';
class ReviewForm extends Component {
  state = {
    ratings: 0
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = () => {};
  render() {
    const {
      handleCloseForm,
      name,
      hoverState,
      setHoverState,
      onMouseLeave,
      setRating,
      reviewButtonControl
    } = this.props;

    const stars = [1, 2, 3, 4, 5];
    return (
      <Formik
        initialValues={{
          data: {
            name: '',
            text: ''
          }
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            this.props.onReviewSubmit({
              profile_photo: defaultProfilePic,
              rating: this.state.ratings,
              relative_time_description: (function setElapseTime() {
                return new Date();
              })()
            });
            setSubmitting(false);
          }, 4000);
          console.log('Form Values ', values);
        }}
        validate={values => {
          let errors = {};
          if (!values.data.name) {
            errors.name = 'Please End Your Name';
          }
          if (!values.data.text) {
            errors.text = 'Please Enter Your Review';
          }
          return errors;
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          handleBlur,
          touched
        }) => (
          <main className="modal-form">
            <form onSubmit={handleSubmit} className="modal--form-inner">
              <div className="text-align-centre">
                <h1>{name}</h1>
              </div>
              <h2>Add Review</h2>
              {stars.map((s, i) => (
                <Star
                  key={i}
                  starId={i}
                  onMouseEnter={() => setHoverState(i)}
                  onMouseLeave={() => onMouseLeave(0)}
                  onClick={() => setRating(i)}
                  rating={hoverState || this.state.rating - 1}
                />
              ))}
              <Input
                name="name"
                value={values.name}
                label="Your Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
              />
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
                <AddButton
                  reviewButtonControl={reviewButtonControl}
                  handleSubmit={this.handleSubmit}
                />
              </footer>
            </form>
          </main>
        )}
      </Formik>
    );
  }
}

export default ReviewForm;
