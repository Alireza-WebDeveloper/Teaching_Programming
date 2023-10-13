'use client';
import { FC } from 'react';
import { Formik, FormikValues, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import Link from 'next/link';

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
  name: Yup.string().required('Please enter your name'),
  email: Yup.string().required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
  passwordConfirm: Yup.string().required('Please repeat your password'),
});

const SignUp: FC<SignUpProps> = () => {
  // Submit Form
  const handleFilterProucts = async (values: FormikValues) => {
    console.log(values);
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
                type="text"
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
                  href={'/signin'}
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
