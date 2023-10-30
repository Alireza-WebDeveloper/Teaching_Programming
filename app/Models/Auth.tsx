import { CourseState } from './Course';

export interface SignInState {
  email: string;
  password: string;
}

export interface SignResponse {
  statu: string;
  data: {
    user: {
      name: string;
      email: string;
      savedCourse: CourseState[];
    };
  };
}

export interface SignUpState {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface ForgotPasswordState {
  email: string;
}

export interface ForgotPasswordProps {
  status: string;
  message: string;
}

export interface CodePasswordState {
  code: string;
}

export interface ResetPasswordState {
  password: string;
  passwordConfirm: string;
}

export interface UpdatePasswordState {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ResetPasswordState {
  id: string;
  code: string;
  password: string;
  passwordConfirm: string;
}

export interface ResetPasswordResponse {
  status: string;
  message: string;
}

export interface TokenResetPasswordResponse {
  status: string;
  timeOut: any;
}

export interface CodeResetPasswordState {
  code: string;
}

export interface CodeResetPasswordResponse {
  status: string;
  message: string;
}

export interface UpdatePasswordResponse {
  status: string;
  message: string;
}
