'use client';
import { FC } from 'react';
import Input from './input';
import TextArea from './textArea';
const FormikControl: FC<any> = ({ control, ...otherProps }) => {
  switch (control) {
    case 'input':
      return <Input otherProps={otherProps} />;
    case 'textArea':
      return <TextArea otherProps={otherProps} />;
    default:
      return null;
  }
};

export default FormikControl;
