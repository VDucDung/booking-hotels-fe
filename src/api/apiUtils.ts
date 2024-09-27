/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpMethod } from '@/type/httpMethodt.js';
import axiosInstance from './axiosInstance';

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
    if (error) {
      return Promise.reject({ ...error });
    }
  }
};
