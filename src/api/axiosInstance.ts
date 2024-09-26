import hostname from '@/utils/http';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { addOrUpdateFieldInLocalStorage, getLocalStorageItem } from '@/utils/localStorage';
import { routes } from '@/configs';

const axiosInstance = axios.create({
  baseURL: `${hostname}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = getLocalStorageItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    return { ...response.data, url: response.config.url };
  },

  async function (error: AxiosError) {
    const originalRequest = error.config;

    if (
      error.response?.data.code === 401 &&
      ['jwt expired', 'jwt hết hạn'].includes(error.response?.data.message) &&
      !originalRequest._retry &&
      !originalRequest.url.includes('refresh-tokens')
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = getLocalStorageItem('refreshToken');
        const response1 = await axiosInstance.post('v1/auth/refresh-tokens', { refreshToken });

        const newAccessToken = response1.data.accessToken;
        addOrUpdateFieldInLocalStorage(null, 'accessToken', newAccessToken);
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = routes.login;
        return Promise.reject(refreshError);
      }
    }

    if (error.response) {
      const { code, message } = error.response.data;
      return Promise.reject({ success: false, message, code, url: error.config.url });
    } else {
      return Promise.reject({ success: false, message: 'Network error', code: 0 });
    }
  },
);

export default axiosInstance;
