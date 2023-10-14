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
    };
  };
}

export interface SignUpState {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
