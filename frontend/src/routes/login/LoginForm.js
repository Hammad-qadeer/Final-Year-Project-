// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = () => (
  <div className="d-flex justify-content-center mt-4">
    <div className="col-8">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label for="email">Email</label>
              <Field
                id="email"
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <Field
                id="password"
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" />
              <div className="mt-2">
                <Field id="password" type="checkbox" name="remember" />
                <label>&nbsp;Remember me</label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <div>
                <span>
                  Don't have an account? <a href="/signup">Sign up</a>.
                </span>
                <br />
                <span className="psw">
                  Forgot <a href="/forgot">password?</a>
                </span>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default LoginForm;
