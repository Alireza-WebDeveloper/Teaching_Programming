'use client';
import { FC } from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import { asyncResetPassword } from '@/app/StateManagement/Service/Auth';

// Types

type ResetPasswordProps = {
  handleResetPassword(values: {
    password: string;
    passwordConfirm: string;
  }): void;
};
// InitialValues
const initialValues: any = {
  password: '',
  passwordConfirm: '',
};

// Validation
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .max(15, 'Password cannot be more than 15 characters.')
    .matches(
      /^(?=(.*[A-Za-z]){3,})(?=(.*\d){3,})[A-Za-z\d]+$/,
      'Password must have at least 3 English letters and 3 digits.'
    )
    .required('Password is required.'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match.')
    .required('Repeat Password is required.'),
});

const ResetPassword: FC<ResetPasswordProps> = ({ handleResetPassword }) => {
  // States

  // Submit Form

  // Return JSX
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleResetPassword}
      validationSchema={validationSchema}
    >
      {(FormikProps) => {
        return (
          <Formik_Form>
            <div className="flex flex-col space-y-5">
              <FormikControl
                control="input"
                name="password"
                type="text"
                label="password"
              />
              <FormikControl
                control="input"
                name="passwordConfirm"
                type="text"
                label="password confirm"
              />
              <section className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="bg-green-600 w-full py-2 rounded-lg capitalize px-4 text-2xl text-white"
                >
                  send
                </button>
              </section>
            </div>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default ResetPassword;
