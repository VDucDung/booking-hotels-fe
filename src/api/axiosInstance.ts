import { routes } from '@/configs';
import { addOrUpdateFieldInLocalStorage, getLocalStorageItem, hostname } from '@/utils';
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: `${hostname}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = getLocalStorageItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return { ...response.data, url: response.config.url };
  },

  async function (error) {
    const originalRequest = error.config;

    if (
      error.response.data.code === 401 &&
      ['jwt expired', 'jwt hết hạn'].includes(error.response.data.message) &&
      !originalRequest._retry &&
      !error.config.url.includes('refresh-tokens')
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = getLocalStorageItem('refreshToken');
        const responses = await axiosInstance.post('auth/refresh-tokens', { refreshToken: refreshToken });

        const newAccessToken = responses.data.accessToken;
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
      return Promise.reject({ success: false, message: message, code: code, url: error.config.url });
    } else {
      return Promise.reject({ success: false, message: 'Network error', code: 0 });
    }
  },
);

export default axiosInstance;
