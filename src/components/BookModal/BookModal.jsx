import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './BookModal.module.css';
import * as Yup from "yup";
import { useState } from 'react';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  tel: Yup.string()
  .matches(/^[0-9+\-()\s]+$/, "Invalid phone number")
  .min(8, "Phone number must be at least 8 characters")
  .required("Phone number is required"),
});

export default function BookModal({ teacher, onClose, onSubmit }) {
  const [selected, setSelected] = useState("Career and business");

  const options = [
    "Career and business",
    "Lesson for kids",
    "Living abroad",
    "Exams and coursework",
    "Culture, travel or hobby",
  ];

  const handleSubmit = (values, { resetForm }) => {
    onSubmit({ ...values, reason: selected });
    resetForm(); // очистить форму після сабміту
    onClose();   // закрити модалку після відправки
  };

  return (
    <div className={css.modalBackdrop} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>✖</button>

        <h1 className={css.bookHeader}>Book trial lesson</h1>
        <p className={css.bookText}>
          Our experienced tutor will assess your current language level, discuss your learning goals, 
          and tailor the lesson to your specific needs.
        </p>

        <div className={css.teaherContainer}>
          <div className={css.avatar}>
            <img
              className={css.avatarImg}
              src={teacher?.avatar_url}
              alt={`${teacher?.name || ''}'s avatar`}
            />
          </div>
          <div className={css.teacherData}>
            <p className={css.teacherText}>Your teacher</p>
            <p className={css.teacher}>{teacher?.name} {teacher?.surname}</p>
          </div>
        </div>

        <h2 className={css.reasons}>What is your main reason for learning English?</h2>
        <div className={css.radio}>
          {options.map((option) => (
            <label key={option} className={css.radioLabel}>
              <input
                type="radio"
                value={option}
                checked={selected === option}
                onChange={() => setSelected(option)}
              />
              <span className={css.customRadio}></span>
              {option}
            </label>
          ))}
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            tel: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={css.registerForm} autoComplete="off">
              <div className={css.labelContainer}>
                <label className={css.registerLabel}>
                  <Field
                    type="text"
                    name="name"
                    className={css.registerInput}
                    placeholder="Name"
                  />
                  <ErrorMessage name="name" component="div" className={css.registerError} />
                </label>

                <label className={css.registerLabel}>
                  <Field
                    type="email"
                    name="email"
                    className={css.registerInput}
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component="div" className={css.registerError} />
                </label>

                <label className={css.registerLabel}>
                  <Field
                    type="tel"
                    name="tel"
                    className={css.registerInput}
                    placeholder="Phone number"
                  />
                  <ErrorMessage name="tel" component="div" className={css.registerError} />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={css.bookButton}
              >
                Book
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}





    