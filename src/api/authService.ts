import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from './apiUtils';
import Cookies from 'js-cookie';

interface UserCredentials {
  username: string; 
  password: string;
}

interface AuthResponse {
  code: number;
  data: {
    accessToken: string;
    refreshToken: string;
    user: any; 
  };
}

export const loginUser = createAsyncThunk<AuthResponse, UserCredentials, { rejectValue: any }>(
  'auth/login',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const customHeaders = {
        'accept-language': `${Cookies.get('lang')}`,
      };
      const res: AuthResponse = await callApi('POST', `/auth/login`, null, userCredentials, customHeaders);
      if (res.code === 200) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        localStorage.setItem('refreshToken', JSON.stringify(res.data.refreshToken));
        localStorage.setItem('user', JSON.stringify(res.data.user));
      }
      return res;
    } catch (error) {
      return rejectWithValue({ ...error });
    }
  }
);

export const registerUser = createAsyncThunk<AuthResponse, UserCredentials, { rejectValue: any }>(
  'auth/register',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const customHeaders = {
        'accept-language': `${Cookies.get('lang')}`,
      };
      const res: AuthResponse = await callApi('POST', `/auth/register`, null, userCredentials, customHeaders);
      return res;
    } catch (error) {
      return rejectWithValue({ ...error });
    }
  }
);

export const clearError = createAsyncThunk('auth/clearError', async () => {});
