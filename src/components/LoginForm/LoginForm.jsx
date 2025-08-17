import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './Loginform.module.css'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';

export default function LoginForm ({ onClose = () => {} }) {
      const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting }) => {
    return dispatch(loginUser(values))  // ПОВЕРТАЄМО проміс
      .unwrap()
      .then(() => {
        console.log("login success");
        onClose();
      })
      .catch((err) => {
        console.log("login error", err);
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
          <div className={css.loginContainer}>
              <h1 className={css.loginHeader}>Log In</h1>
              <p className={css.loginText}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
          </div>
          <div className={css.loginLabel}>
            <label>
              <Field type="email" name="email" placeholder="Email" className={css.loginInput}/>
              <ErrorMessage name="email" component="div" />
            </label>
            <label>
              <Field type="password" name="password" placeholder="Password" className={css.loginInput}/>
              <ErrorMessage name="password" component="div" />
            </label>
          </div>
          <button type="submit" disabled={isSubmitting} className={css.loginButton}>
            Log In
          </button>
        </Form>
      )}
    </Formik>   
     </div>
  );
}