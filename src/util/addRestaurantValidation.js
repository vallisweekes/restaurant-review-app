import * as Yup from 'yup';

export const formValidationSchema = Yup.object().shape({
  restaurantName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  restPhoneNumber: Yup.number().required('Required'),
  website: Yup.string()
    .min(9, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required')
});

export default formValidationSchema;
