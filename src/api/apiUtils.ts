/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpMethod } from '@/type/httpMethodt';
import axiosInstance from './axiosInstance';
import { ApiResponse } from '@/interfaces';

interface CustomHeaders {
  [key: string]: string;
}

export const callApi = async (
  method: HttpMethod,
  url: string,
  params: Record<string, any> | null = null,
  data: Record<string, any> | null = null,
  customHeaders: CustomHeaders = {}
): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axiosInstance(url, {
      method,
      params,
      data,
      headers: { ...customHeaders },
    });
    return response;
  } catch (error: any) {
    return Promise.reject({ ...error });
  }
};
