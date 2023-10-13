'use client';
import { FC } from 'react';
import Input from './input';

type FormikControlProps = {
  control: 'input' | 'range' | 'select';
  name:
    | 'firstname'
    | 'lastname'
    | 'username'
    | 'email'
    | 'password'
    | 'repassword'
    | 'newpassword';
  type: 'text' | 'password';
  label?: string;
};

const FormikControl: FC<any> = ({ control, ...otherProps }) => {
  switch (control) {
    case 'input':
      return <Input otherProps={otherProps} />;
    default:
      return null;
  }
};

export default FormikControl;
