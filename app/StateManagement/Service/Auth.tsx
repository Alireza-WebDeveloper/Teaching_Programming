import {
  SignResponse,
  SignInState,
  SignUpState,
  ForgotPasswordState,
  ForgotPasswordProps,
  ResetPasswordState,
  ResetPasswordResponse,
  TokenResetPasswordResponse,
  CodeResetPasswordResponse,
  UpdatePasswordState,
  UpdatePasswordResponse,
} from '@/app/Models/Auth';
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
    throw new Error(err.response.data.message);
  }
};

const asyncForgotPasword = async (data: ForgotPasswordState) => {
  try {
    const response = await BaseApi.post<ForgotPasswordProps>(
      '/auth/forgotPassword',
      data
    );
    return response;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncCheckTokenResetPassword = async (id: any) => {
  try {
    const response = await BaseApi.get<TokenResetPasswordResponse>(
      `/auth/checkTokenResetPassword/${id}`
    );
    return response;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncCheckCodeResetPassword = async (data: any) => {
  try {
    const { id, code } = data;
    const response = await BaseApi.post<CodeResetPasswordResponse>(
      `/auth/checkCodeResetPassword/${id}`,
      {
        code,
      }
    );
    return response;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncResetPassword = async (data: ResetPasswordState) => {
  try {
    const { id, code, password, passwordConfirm } = data;
    const response = await BaseApi.post<ResetPasswordResponse>(
      `auth/resetpassword/${id}`,
      {
        code,
        password,
        passwordConfirm,
      }
    );
    return response;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncUpdatePassword = async (data: UpdatePasswordState) => {
  try {
    const response = await BaseApi.post<UpdatePasswordResponse>(
      `auth/updatepassword`,
      data
    );
    return response;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncSavedCourse = async (id: any) => {
  try {
    const response = await BaseApi.patch<any>(`auth/course/${id}`);

    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncDeleteCourse = async (id: any) => {
  try {
    const response = await BaseApi.delete<any>(`auth/course/${id}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const asyncUpdateAvatar = async (data: any) => {
  try {
    console.log(data);
    const response = await BaseApi.patch<any>(`auth/updateAvatar`, data);
    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

export {
  asyncSignIn,
  asyncSignUp,
  asyncGetUserVerificationToken,
  asyncLogout,
  asyncRefreshToken,
  asyncForgotPasword,
  asyncCheckTokenResetPassword,
  asyncCheckCodeResetPassword,
  asyncResetPassword,
  asyncUpdatePassword,
  asyncSavedCourse,
  asyncDeleteCourse,
  asyncUpdateAvatar,
};
