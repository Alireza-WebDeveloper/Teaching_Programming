import axios from 'axios';
import { asyncRefreshToken } from '../Service/Auth';

const BaseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Setting Refresh Token
BaseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      if (
        error.response.data.code &&
        error.response.data.code === 'TOKEN_EXPIRED'
      ) {
        try {
          const data = await asyncRefreshToken();
          return Promise.resolve(data);
        } catch (err) {
          return Promise.reject(err);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default BaseApi;
