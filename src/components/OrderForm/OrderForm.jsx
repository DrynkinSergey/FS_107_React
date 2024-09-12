import { Field, Form, Formik } from 'formik';
import s from './OrderForm.module.css';
const OrderForm = () => {
  const initialValues = {
    username: '',
    email: '',
    city: '',
  };
  const handleSubmit = (values, options) => {
    console.log('IT WORKS');
    console.log('values', values);
    options.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>ПІБ:</span>
            <Field name='username' className={s.input} placeholder="Введіть ім'я" />
          </label>
          <label className={s.label}>
            <span>Емейл:</span>
            <Field name='email' className={s.input} placeholder='Введіть емейл' />
          </label>
          <label className={s.label}>
            <span>Місто:</span>
            <Field name='city' className={s.input} placeholder='Введіть місто' />
          </label>

          <button type='submit'>Створити замовлення</button>
        </Form>
      </Formik>
    </div>
  );
};
export default OrderForm;
