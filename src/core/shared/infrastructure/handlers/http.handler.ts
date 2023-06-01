import axios, { AxiosInstance } from 'axios';
import { httpHeaderConstants } from '../../../constants';

export const retrieveCurrentToken = (): string =>
  import.meta.env.VITE_BEARER_TOKEN;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    Authorization: `${
      httpHeaderConstants.AUTHORIZATION
    } ${retrieveCurrentToken()}`,
  },
  timeout: 3000,
});
