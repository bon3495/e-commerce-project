import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://ecommerce-api-jsonsv.herokuapp.com/api',
  headers: { 'Content-Type': 'application/json' },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const {
    //   config: { url },
    //   status,
    //   data,
    // } = error.response;

    // const URLS = ['/auth/local/register', '/auth/local'];

    // if (URLS.includes(url) && status === 400) {
    //   const errorList = data.data || [];
    //   const firstError = errorList.length > 0 ? errorList[0] : {};
    //   const messages = firstError.messages || [];
    //   const firstMessage = messages.length > 0 ? messages[0] : {};
    //   // const message = firstMessage.message
    //   throw new Error(firstMessage.message);
    // }

    return Promise.reject(error);
  }
);

export default axiosClient;
