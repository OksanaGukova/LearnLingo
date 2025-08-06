import { ErrorMessage, Field, Form, Formik } from 'formik'
import css from './RegistrationForm.module.css'
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';


const validationSchema = Yup.object().shape({
  name: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function RegistrationForm () {
    const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));
    actions.resetForm();
  };
    return (
         <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.registerForm} autoComplete="off">
            <h1>Registration</h1>
            <p>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
          <label className={css.registerLabel}>
            Name
            <Field type="text" name="name" className={css.registerInput} />
            <ErrorMessage
              name="name"
              component="div"
              className={css.registerError}
            />
          </label>
          <label className={css.registerLabel}>
            Email
            <Field type="email" name="email" className={css.registerInput} />
            <ErrorMessage
              name="email"
              component="div"
              className={css.registerError}
            />
          </label>
          <label className={css.registerLabel}>
            Password
            <Field
              type="password"
              name="password"
              className={css.registerInput}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.registerError}
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${css.registerButton} ${
              isSubmitting ? css.registerButtonDisabled : ""
            }`}
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
    )
}