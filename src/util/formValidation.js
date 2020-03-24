import * as Yup from 'yup';

export const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  text: Yup.string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required')
});

export default formValidationSchema;
