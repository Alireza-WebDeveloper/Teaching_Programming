'use client';
import { FC } from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import Link from 'next/link';
import useForgotPassword from '@/app/Hooks/Auth/useForgotPassword';
// Types

type ForgotPasswordProps = {};
// InitialValues
const initialValues: { email: string } = {
  email: '',
};

// Validation
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be a valid email address.')
    .required('Email is required.'),
});

const ForgotPassword: FC<ForgotPasswordProps> = () => {
  // States
  const { mutate } = useForgotPassword();
  // Submit Form
  const handleFilterProucts = async (values: { email: string }) => {
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

export default ForgotPassword;
