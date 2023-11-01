'use client';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { FC } from 'react';
type textAreaProps = {
  otherProps: any;
};

const TextArea: FC<textAreaProps> = ({ otherProps }) => {
  const { name, label } = otherProps;

  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        const { field } = fieldProps;
        return (
          <section className="w-full">
            <textarea
              {...field}
              id={name}
              rows={4}
              autoComplete="off"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400"
              placeholder={label}
            />
          </section>
        );
      }}
    </Field>
  );
};

export default TextArea;
