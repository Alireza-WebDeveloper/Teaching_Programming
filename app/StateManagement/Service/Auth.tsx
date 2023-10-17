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

const asyncGetUserVerificationToken = async () => {
  try {
    const user = await BaseApi.get<SignResponse>('/auth/tokenVerification');
    return user.data.data.user;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncLogout = async () => {
  try {
    const data = await BaseApi.post('/auth/logout');
    return data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncRefreshToken = async () => {
  try {
    const data = await BaseApi.get('/auth/tokenRefresh');
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export {
  asyncSignIn,
  asyncSignUp,
  asyncGetUserVerificationToken,
  asyncLogout,
  asyncRefreshToken,
};
