import { SignInState } from '@/app/Models/Auth';
import BaseApi from '../Base';

const asyncSignIn = async (data: SignInState) => {
  try {
    const user = await BaseApi.post('/auth/signin', {
      email: data.email,
      password: data.password,
    });
    return user;
  } catch (err: any) {
    console.log(err.message);
    throw new Error(err.message);
  }
};

export { asyncSignIn };
