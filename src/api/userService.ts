/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from './apiUtils';
import { ApiResponse, ChangePasswordValues, GetUserResponse, GetUsersResponse, ProfileFormValues } from '@/interfaces';
import Cookies from 'js-cookie';

export const getUsers = createAsyncThunk<GetUsersResponse, void>(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {

    const res = await callApi('GET', `/users`);
    if (res.data) {
      return res as GetUsersResponse;
    } else {
      return rejectWithValue('Failed to fetch hotels');
    }
      
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch hotels');
    }
  }
);

export const getUser = createAsyncThunk<GetUserResponse, void>(
  'users/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const customHeaders = {
        'accept-language': `${Cookies.get('lang')}`,
      };
    const res = await callApi('GET', `/users/me`, null, {}, customHeaders);
    if (res.data) {
      return res as GetUserResponse;
    } else {
      return rejectWithValue('Failed to fetch hotels');
    }
      
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch hotels');
    }
  }
);

export const updateUser = createAsyncThunk<
  GetUserResponse, 
  { profileData: ProfileFormValues; avatar: File | null },
  { rejectValue: string }
>(
  'users/updateUser',
  async ({ profileData, avatar }, { rejectWithValue }) => {
    try {
      const customHeaders = {
        'Content-Type': 'multipart/form-data',
        'accept-language': `${Cookies.get('lang')}`,
      };
      const formData = new FormData();

      Object.keys(profileData).forEach((key) => {
        if (profileData[key] !== undefined && profileData[key] !== null) {
          formData.append(key, profileData[key] as string);
        }
      });

      if (avatar) {
        formData.append('file', avatar);
      }

      const response = await callApi('PUT', `/users/me`, null, formData, customHeaders);

      if (response?.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      console.log(JSON.parse(localStorage.getItem('user') as string))
      return response.data as GetUserResponse;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to update user profile');
    }
  }
);

export const changePassword = createAsyncThunk<ApiResponse, ChangePasswordValues>('auth/change-password', async (userData: ChangePasswordValues, { rejectWithValue }) => {
  try {
    const customHeaders = {
      'accept-language': `${Cookies.get('lang')}`,
    };
    const response = await callApi('POST', `/users/change-password`, null, userData, customHeaders);
    console.log(response)
    return response;
  } catch (error: any) {
    return rejectWithValue(error.message || 'Failed to update user profile');
  }
});
