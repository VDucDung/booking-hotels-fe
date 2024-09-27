/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { callApi } from './apiUtils';
import { ApiResponse, UserCredentials } from '@/interfaces';

export const loginUser = createAsyncThunk<ApiResponse, UserCredentials>(
  'auth/login',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const customHeaders = {
        'accept-language': `${Cookies.get('lang')}`,
      };
      const res = await callApi('POST', `/auth/login`, null, userCredentials, customHeaders);
      if (res.code === 200) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        localStorage.setItem('refreshToken', JSON.stringify(res.data.refreshToken));
        localStorage.setItem('user', JSON.stringify(res.data.user));
      }
      return res;
    } catch (error) {
      if (error) {
        return rejectWithValue({ ...error });
      }
    }
  }
);

export const registerUser = createAsyncThunk<ApiResponse, UserCredentials>(
  'auth/register',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const customHeaders = {
        'accept-language': `${Cookies.get('lang')}`,
      };
      const res = await callApi('POST', `/auth/register`, null, userCredentials, customHeaders);
      return res;
    } catch (error) {
      if(error) {
        return rejectWithValue({ ...error });
      }
    }
  }
);

export const clearError = createAsyncThunk('auth/clearError', async () => {});