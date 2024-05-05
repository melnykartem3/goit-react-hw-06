import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice';
import { useId } from 'react';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!!!'),
  number: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!!!'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    dispatch(
      addContact({
        id: Math.random().toString(36).substring(2, 9),
        name: values.name,
        number: values.number,
      }),
    );
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label className={css.contactLabel} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.contactInput}
          type="text"
          name="name"
          id={nameId}
        />
        <ErrorMessage className={css.error} name="name" component="div" />

        <label className={css.contactLabel} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.contactInput}
          type="text"
          name="number"
          id={numberId}
        />
        <ErrorMessage className={css.error} name="number" component="div" />

        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
