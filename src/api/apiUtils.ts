import axiosInstance from './axiosInstance';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; 

interface CustomHeaders {
  [key: string]: string; 
}

export const callApi = async (
  method: HttpMethod,
  url: string,
  params: Record<string, any> | null = null,
  data: Record<string, any> | null = null,
  customHeaders: CustomHeaders = {}
) => {
  try {
    const response = await axiosInstance(url, {
      method,
      params,
      data,
      headers: { ...customHeaders },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject({ ...error.response.data, status: error.response.status });
    }
    return Promise.reject({ message: 'Network error', code: 0 });
  }
};
