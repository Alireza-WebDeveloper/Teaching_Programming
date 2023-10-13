import axios from 'axios';

const BaseApi = axios.create({
  url: process.env.API_URL,
});

export default BaseApi;
