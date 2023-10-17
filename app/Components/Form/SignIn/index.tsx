'use client';
import { FC } from 'react';
import { Formik, FormikValues, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import { SignInState } from '@/app/Models/Auth';
import Link from 'next/link';
import useSignIn from '@/app/Hooks/Auth/useSignIn';
// Types

type SignInProps = {};
// InitialValues
const initialValues: SignInState = {
  email: '',
  password: '',
};

// Validation
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be a valid email address.')
    .required('Email is required.'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .max(15, 'Password cannot be more than 15 characters.')
    .matches(
      /^(?=(.*[A-Za-z]){3,})(?=(.*\d){3,})[A-Za-z\d]+$/,
      'Password must have at least 3 English letters and 3 digits.'
    )
    .required('Password is required.'),
});

const SignIn: FC<SignInProps> = () => {
  // States
  const { mutate } = useSignIn();
  // Submit Form
  const handleFilterProucts = async (values: SignInState) => {
    mutate(values);
  };
  // Return JSX
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFilterProucts}
      validationSchema={validationSchema}
    >
      {(FormikProps) => {
        return (
          <Formik_Form>
            <div className="flex flex-col space-y-5">
              <FormikControl
                control="input"
                name="email"
                type="text"
                label="email"
              />
              <FormikControl
                control="input"
                name="password"
                type="password"
                label="password"
              />
              <section className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="bg-green-600 w-full py-2 rounded-lg capitalize px-4 text-2xl text-white"
                >
                  sign in
                </button>
                <section className="flex justify-between">
                  <Link
                    className="text-center text-sm text-blue-700 dark:text-blue-500 font-bold"
                    href={'/signup'}
                  >
                    {`don't have an account?`}
                  </Link>
                  <Link
                    className="text-center text-sm text-blue-700 dark:text-blue-500 font-bold"
                    href={'/auth/forgot-password'}
                  >
                    {`Forgot your password?`}
                  </Link>
                </section>
              </section>
            </div>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default SignIn;
