'use client';
import { FC } from 'react';
import Input from './input';
import TextArea from './textArea';
import File from './file';
const FormikControl: FC<any> = ({ control, ...otherProps }) => {
  switch (control) {
    case 'input':
      return <Input otherProps={otherProps} />;
    case 'textArea':
      return <TextArea otherProps={otherProps} />;
    case 'file':
      return <File otherProps={otherProps} />;
    default:
      return null;
  }
};

export default FormikControl;
