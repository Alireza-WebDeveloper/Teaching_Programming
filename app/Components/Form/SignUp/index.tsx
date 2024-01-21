'use client';
import { FC } from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import Link from 'next/link';
import useSignUp from '@/app/Hooks/Auth/useSignUp';
import { SignUpState } from '@/app/Models/Auth';

// Types

type initialValuesType = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type SignUpProps = {};
// InitialValues
const initialValues: initialValuesType = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

// Validation
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Name must be at least 4 characters.')
    .max(30, 'Name must be at least 30 characters.')
    .required('Name is Required.'),
  email: Yup.string()
    .email('Email must be a valid email address.')
    .required('Email is required.'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .max(30, 'Password cannot be more than 15 characters.')
    .matches(
      /^(?=(.*[A-Za-z]){3,})(?=(.*\d){3,})[A-Za-z\d]+$/,
      'Password must have at least 3 English letters and 3 digits.'
    )
    .required('Password is required.'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match.')
    .required('Repeat Password is required.'),
});

const SignUp: FC<SignUpProps> = () => {
  // States
  const { mutate } = useSignUp();
  // Submit Form
  const handleFilterProucts = async (values: SignUpState) => {
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
                name="name"
                type="text"
                label="name"
              />
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
              <FormikControl
                control="input"
                name="passwordConfirm"
                type="password"
                label="re-password"
              />
              <section className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="bg-green-600 w-full py-2 rounded-lg capitalize px-4 text-2xl text-white"
                >
                  sign up
                </button>
                <Link
                  className="text-center text-sm text-blue-700 dark:text-blue-500 font-bold"
                  href={'/auth/signin'}
                >
                  have you already registered?
                </Link>
              </section>
            </div>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default SignUp;
