import { Formik, Form, Field } from 'formik';

const FilterBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = values => {
    console.log(values);
    handleChangeQuery(values.query);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='query' />
          <button type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default FilterBar;
