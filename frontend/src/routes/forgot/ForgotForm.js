// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ForgotForm = () => (
  <div className="d-flex justify-content-center mt-4">
    <div className="col-8">
      <h1>Forgot Password?</h1>
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
              <label for="password">
                You can reset your password using this form
              </label>
            </div>
            <div className="form-group">
              <label for="resetpassword">New Password</label>
              <Field
                id="password"
                type="password"
                className="form-control"
                name="password"
                placeholder=""
              />
              <ErrorMessage name="password" component="div" />
              <div className="form-group">
                <label for="password">Verify Password</label>
                <Field
                  id="verifypassword"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder=""
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Reset Password
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default ForgotForm;
