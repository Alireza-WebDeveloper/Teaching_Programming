'use client';
import { FC } from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import useUpdatePassword from '@/app/Hooks/Auth/useUpdatePassword';
import { UpdatePasswordState } from '@/app/Models/Auth';

// Types

type UpdatePassword = {};
// InitialValues
const initialValues: UpdatePasswordState = {
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

// Validation
const validationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required('Current Password is required.')
    .min(8, 'Password must be at least 8 characters.')
    .max(15, 'Password cannot be more than 15 characters.')
    .matches(
      /^(?=(.*[A-Za-z]){3,})(?=(.*\d){3,})[A-Za-z\d]+$/,
      'Password must have at least 3 English letters and 3 digits.'
    ),
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .max(15, 'Password cannot be more than 15 characters.')
    .matches(
      /^(?=(.*[A-Za-z]){3,})(?=(.*\d){3,})[A-Za-z\d]+$/,
      'Password must have at least 3 English letters and 3 digits.'
    )
    .required('Password is required.'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match.')
    .required('Repeat new Password is required.'),
});

const UpdatePassword: FC<UpdatePassword> = () => {
  // States
  const { mutate } = useUpdatePassword();
  // Submit Form
  const handleFilterProucts = async (values: any) => {
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
                name="currentPassword"
                type="password"
                label="current password"
              />
              <FormikControl
                control="input"
                name="newPassword"
                type="password"
                label="new Password"
              />
              <FormikControl
                control="input"
                name="confirmNewPassword"
                type="password"
                label="confirm new password"
              />
              <section className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="bg-green-600 w-full py-2 rounded-lg capitalize px-4 text-2xl text-white"
                >
                  update
                </button>
              </section>
            </div>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default UpdatePassword;
