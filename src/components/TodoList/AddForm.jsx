import { Field, Form, Formik } from 'formik';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../../redux/taskSlice';

export const AddForm = () => {
  const initialValues = { todo: '' };
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newTodo = { id: nanoid(), todo: values.todo, completed: false };

    dispatch(addTodo(newTodo));
    options.resetForm();
  };

  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='todo' placeholder='Enter new todo' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
