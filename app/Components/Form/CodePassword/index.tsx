'use client';
import { FC } from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import React from 'react';
import { CodePasswordState } from '@/app/Models/Auth';
// Types

type CodePasswordProps = {
  handleCheckCodeToken(values: CodePasswordState): any;
};
// InitialValues
const initialValues: CodePasswordState = {
  code: '',
};

// Validation
const validationSchema = Yup.object().shape({
  code: Yup.string().required('code is required.'),
});

const CodePassword: FC<CodePasswordProps> = ({ handleCheckCodeToken }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleCheckCodeToken}
      validationSchema={validationSchema}
    >
      {(FormikProps) => {
        return (
          <Formik_Form>
            <div className="flex flex-col space-y-5">
              <FormikControl
                control="input"
                name="code"
                type="text"
                label="code"
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

export default React.memo(CodePassword);
