import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './OrderForm.module.css';
import * as Yup from 'yup';
// План використання формік!!!
// 1. Встановити бібліотеку
// 2. Імпортувати та використати <Formik></Formik>
// 3. Додати всередину Formik компонент Form
// 4. Створит довільну кількість Field
// 5. Додати кнопку з типом submit
// 6. Створюємо initialValues та handleSubmit
// 7. Передаємо бажані поля в initialValues а також додаємо до всіх полів (Field) пропс name відповідно початкових станів
// 8. Передаємо у формік обробник і початковий стан  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// 9. Насолоджуємось
const OrderForm = () => {
  const initialValues = {
    username: '',
    email: '',
    city: '',
    petType: '',
    age: '',
    summary: '',
    gender: '',
    agree: false,
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  const arr = ['Собака', 'Кошеня', 'Папуга'];

  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const onlyWords = /^[a-zA-Z]+$/;
  const orderSchema = Yup.object().shape({
    username: Yup.string()
      .matches(onlyWords, 'ONLY WORDS')
      .min(3, 'Мінімум 3 символа (вибач Ян)')
      .max(22, 'Максимум 22 символа')
      .required("Це поле обов'язкове!"),
    email: Yup.string().matches(re, 'ЦЕ НЕ ЕМЕЙЛ!!!').required("Це поле обов'язкове!"),
    city: Yup.string().min(3).max(20).required("Це поле обов'язкове!"),
    age: Yup.number().min(1).max(99).positive().required("Це поле обов'язкове!"),
    petType: Yup.string().oneOf(arr, 'Іди геть хацкер!!').required("Це поле обов'язкове!"),
  });
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={orderSchema}>
        {({ values }) => (
          <Form className={s.form}>
            <label className={s.label}>
              <span>ПІБ:</span>
              <Field name='username' className={s.input} placeholder="Введіть ім'я" />
              <ErrorMessage name='username' component='p' className={s.error} />
            </label>
            <label className={s.label}>
              <span>Емейл:</span>
              <Field name='email' className={s.input} placeholder='Введіть емейл' />
              <ErrorMessage name='email' component='p' className={s.error} />
            </label>

            <label className={s.label}>
              <span>Місто:</span>
              <Field name='city' className={s.input} placeholder='Введіть місто' />
              <ErrorMessage name='city' component='p' className={s.error} />
            </label>

            <label className={s.label}>
              <span>Вид улюбленця:</span>
              <Field as='select' name='petType' className={s.input}>
                <option value='Собака'>Собака</option>
                <option value='Кошеня'>Кошеня</option>
                <option value='Папуга'>Папуга</option>
                <option value='Крокодил'>Крокодил</option>
              </Field>
              <ErrorMessage name='petType' component='p' className={s.error} />
            </label>
            <label className={s.label}>
              <span>Вік:</span>
              <Field type='number' name='age' className={s.input} placeholder='Введіть вік улюбленця' />
              <ErrorMessage name='age' component='p' className={s.error} />
            </label>
            <label className={s.label}>
              <span>Побажання:</span>
              <Field as='textarea' name='summary' className={s.input} placeholder='Введіть побажання' />
              <ErrorMessage name='textarea' component='p' className={s.error} />
            </label>
            <div>
              <label>
                <Field type='radio' value='Жін' name='gender' className={s.input} />
                Жін
              </label>
              <label>
                <Field type='radio' value='Чол' name='gender' className={s.input} />
                Чол
              </label>
            </div>
            <label>
              <Field type='checkbox' name='agree' className={s.input} />
              Прочитав (ні) правила і погоджуюсь
            </label>
            <button disabled={values.agree === false} type='submit'>
              Створити замовлення
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default OrderForm;
