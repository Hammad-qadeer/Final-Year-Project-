// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignupForm = () => (
  <div className="d-flex justify-content-center mt-4">
    <div className="col-8">
      <h1>Sign Up</h1>
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
            <div className="form-row">
              <div className="form-group col-6">
                <Field
                  id="fname"
                  type="email"
                  className="form-control"
                  name="fname"
                  placeholder="First Name"
                />
                <ErrorMessage name="fname" component="div" />
              </div>
              <div className="form-group col-6">
                <Field
                  id="lname"
                  type="email"
                  className="form-control"
                  name="lname"
                  placeholder="Last Name"
                />
                <ErrorMessage name="lname" component="div" />
              </div>
            </div>
            <div className="form-group">
              <Field
                id="email"
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-group">
              <Field
                id="password"
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className="form-group">
              <Field
                id="password"
                type="password"
                className="form-control"
                name="password"
                placeholder="Confirm Password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className="mt-2">
              <Field id="password" type="checkbox" name="remember" />
              <span>
                &nbsp;I accept the <a href="#">Terms of use</a> &{" "}
                <a href="#">Privacy Policy</a>
              </span>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-2"
              disabled={isSubmitting}
            >
              Register
            </button>
            <div className="container signin mt-2">
              <span>
                Already have an account? <a href="/">Sign in</a>.
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default SignupForm;
