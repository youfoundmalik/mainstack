import axios, { AxiosRequestConfig } from 'axios';

export class AxiosReqHandlers {
  static controller = new AbortController();

  static API = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_URL,
    timeout: 5000,
    withCredentials: false,
    signal: this.controller.signal,
  });

  static apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await this.API(config);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

AxiosReqHandlers.API.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosReqHandlers.API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
