import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './Loginform.module.css'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';

export default function LoginForm () {
      const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(loginUser(values))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
    return (
        <div>
             <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={css.loginForm} autoComplete="off">
            <h1>Log In</h1>
            <p>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Log In
          </button>
        </Form>
      )}
    </Formik>   
     </div>
  );
}