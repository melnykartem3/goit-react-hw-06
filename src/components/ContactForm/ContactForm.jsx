import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!!!"),
  number: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!!!"),
});

export default function ContactForm({ onAdd }) {
  const contactId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    onAdd({
      id: contactId,
      name: values.name,
      number: values.number,
    });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label className={css.contactLabel} htmlFor={contactId}>
          Name
        </label>
        <Field className={css.contactInput} name="name" id={contactId} />
        <ErrorMessage className={css.error} name="name" component="p" />
        <label className={css.contactLabel} htmlFor={contactId}>
          Number
        </label>
        <Field className={css.contactInput} name="number" id={contactId} />
        <ErrorMessage className={css.error} name="number" component="p" />
        <button type="submit" className={css.addContactBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
