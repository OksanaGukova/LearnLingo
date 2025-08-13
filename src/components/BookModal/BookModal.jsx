import { ErrorMessage, Field, Form, Formik } from 'formik'
import css from './BookModal.module.css'
import * as Yup from "yup";

import { useState } from 'react';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  tel: Yup.string()
    .min(8, "Phone number must be at least 8 characters")
    .required("Phone number is required"),
});


export default function BookModal ({teacher, onClose, onSubmit }) {
 
  const [selected, setSelected] = useState("Career and business");

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: ''
  });


  const options = [
    "Career and business",
    "Lesson for kids",
    "Living abroad",
    "Exams and coursework",
    "Culture, travel or hobby",
  ];


    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (values) => {
    onSubmit({ ...values, reason: selected });
  };

    return (
        <>
         <div className={css.modalBackdrop} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>✖</button>

<h1>Book trial lesson</h1>
<p>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
<div className={css.teaherContainer}>
     <div className={css.avatar}>
              <img
  className={css.avatarImg}
  src={teacher?.avatar_url}
  alt={`${teacher?.name || ''}'s avatar`}
/>
</div>
<div className={css.teacherData}>
    <p>Your teacher</p>
   <p>{teacher?.name} {teacher?.surname}</p>
</div>
</div>
<h2>What is your main reason for learning English?</h2>
  <div className="radio-group">
      {options.map((option) => (
        <label key={option} className="radio-label">
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={() => setSelected(option)}
          />
          <span className="custom-radio"></span>
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
        <Form className={css.registerForm} autoComplete="off" onSubmit={handleSubmit}>
            <div className={css.regDecrciption}>
              <h1 className={css.header}>Registration</h1>
              <p className={css.text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
            </div>
          <div className={css.labelContainer}>
            <label className={css.registerLabel}>
              <Field type="text" name="name" className={css.registerInput} placeholder="Name"
               value={formData.name}
            onChange={handleChange}/>
              <ErrorMessage
                name="name"
                component="div"
                className={css.registerError}
              />
            </label>
            <label className={css.registerLabel}>
              <Field type="email" name="email" className={css.registerInput} placeholder="Email"
               value={formData.email}
            onChange={handleChange}/>
              <ErrorMessage
                name="email"
                component="div"
                className={css.registerError}
              />
            </label>
            <label className={css.registerLabel}>
              <Field
                type="tel"
                name="Phone number"
                className={css.registerInput}
                placeholder ='Phone number' 
                
            onChange={handleChange}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={css.registerError}
              />
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
        </>
    )
}



    