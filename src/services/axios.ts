// import axios, { AxiosRequestConfig, isAxiosError } from "axios";

// export class AxiosReqHandlers {
//   // Create a signal instance, to abort/cancel requests
//   // To abort/cancel a request, call the abort method on the signal ( e.g controller.abort())
//   static controller = new AbortController();

//   // // A default axios instance to auth url (https://api.onehome.ng/auth)
//   // static AUTH = axios.create({
//   //   baseURL: process.env.NEXT_PUBLIC_AUTH_URL,
//   //   timeout: 5000,
//   //   withCredentials: false,
//   // });

//   // // making requests to auth url
//   // static authRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
//   //   try {
//   //     const response = await this.AUTH(config);
//   //     return response.data;
//   //   } catch (error: unknown) {
//   //     if (isAxiosError(error)) {
//   //       // If error is axios error, throw the error and add cause as server to distinguish from network errors
//   //       throw {
//   //         ...error.response?.data,
//   //         cause: 'server',
//   //       };
//   //     }
//   //     throw error;
//   //   }
//   // };

//   // A default axios instance to api url (https://api.onehome.ng/api/moovers)
//   static API = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL,
//     timeout: 5000,
//     withCredentials: true,
//     signal: this.controller.signal,
//   });

//   // making request to api route
//   static apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
//     try {
//       const response = await this.API(config);
//       return response.data;
//     } catch (error: any) {
//       return Promise.reject(error);
//     }
//   };

// }

// AxiosReqHandlers.API.interceptors.request.use(
//   function (config) {
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// AxiosReqHandlers.API.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     return Promise.reject(error);
//   }
// );
