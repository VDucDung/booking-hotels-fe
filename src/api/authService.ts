/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { callApi } from './apiUtils';
import { ApiResponse, LoginGoogleCredentials, UserCredentials } from '@/interfaces';

export const loginUser = createAsyncThunk<ApiResponse, UserCredentials>(
  'auth/login',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const customHeaders = {
        'accept-language': `${Cookies.get('lang')}`,
      };
      const res: ApiResponse = await callApi('POST', `/auth/login`, null, userCredentials, customHeaders);
      if (res.statusCode === 200) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        localStorage.setItem('refreshToken', JSON.stringify(res.data.refreshToken));
        localStorage.setItem('user', JSON.stringify(res.data.user));
      }
      return res; 
    } catch (error) {
      if (error) {
        return rejectWithValue({ ...error }); 
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
);

export const loginGoogle = createAsyncThunk<ApiResponse, LoginGoogleCredentials>(
  'auth/login-google',
  async (loginGoogleCredentials, { rejectWithValue }) => {
    try {
      const customHeaders = {
        'accept-language': `${Cookies.get('lang')}`,
      };
      const res: ApiResponse = await callApi('POST', `/auth/google/login`, null, loginGoogleCredentials, customHeaders);
      if (res.statusCode === 200) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        localStorage.setItem('refreshToken', JSON.stringify(res.data.refreshToken));
        localStorage.setItem('user', JSON.stringify(res.data.user));
      }
      return res; 
    } catch (error) {
      if (error) {
        return rejectWithValue({ ...error }); 
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
);


export const registerUser = createAsyncThunk<any, UserCredentials>(
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
