'use client';
import { Field, FieldProps } from 'formik';
import { FC } from 'react';
import * as Icons from 'react-icons/md';
type FileProps = {
  otherProps: any;
};

const File: FC<FileProps> = ({ otherProps }) => {
  const { name, label } = otherProps;

  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        const { field, meta } = fieldProps;
        const { error: errorMessage, touched } = meta;
        return (
          <section className="w-full">
            <div className="flex flex-col space-y-3">
              <input
                {...field}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>

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

export default File;
