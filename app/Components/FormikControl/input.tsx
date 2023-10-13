'use client';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { FC } from 'react';
type InputProps = {
  otherProps: any;
};

const Input: FC<InputProps> = ({ otherProps }) => {
  const { name, type, label } = otherProps;

  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        const { field, meta } = fieldProps;
        const { error: errorMessage, touched } = meta;
        return (
          <section className="w-full">
            <input
              {...field}
              id={name}
              type={type}
              className="bg-gray-50 placeholder:capitalize border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-3 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96"
              placeholder={label}
            />
            {errorMessage && touched ? (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{errorMessage}</span>
              </p>
            ) : (
              ''
            )}
          </section>
        );
      }}
    </Field>
  );
};

export default Input;
