import { SignResponse, SignInState, SignUpState } from '@/app/Models/Auth';
import BaseApi from '../Base';

const asyncSignUp = async (data: SignUpState) => {
  try {
    const user = await BaseApi.post<SignResponse>('/auth/signup', data);
    return user;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncSignIn = async (data: SignInState) => {
  try {
    const user = await BaseApi.post<SignResponse>('/auth/signin', {
      email: data.email,
      password: data.password,
    });
    return user;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

export { asyncSignIn, asyncSignUp };
