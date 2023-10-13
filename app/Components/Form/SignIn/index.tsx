'use client';
import { FC } from 'react';
import { Formik, FormikValues, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import Link from 'next/link';
// Types

type initialValuesType = {
  email: string;
  password: string;
};

type SignInProps = {};
// InitialValues
const initialValues: initialValuesType = {
  email: '',
  password: '',
};

// Validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
});

const SignIn: FC<SignInProps> = () => {
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
                  sign up
                </button>
                <Link
                  className="text-center text-sm text-blue-700 dark:text-blue-500 font-bold"
                  href={'/signup'}
                >
                  {`don't have an account?`}
                </Link>
              </section>
            </div>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default SignIn;
