import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider';

export const Login = () => {
  const { login } = useContext(authContext);
  const initialValues = {
    username: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    login(values.username);
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='username' placeholder='Enter username' />
          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  );
};
