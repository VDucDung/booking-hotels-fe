/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from './apiUtils';
import { GetUserResponse, GetUsersResponse, ProfileFormValues } from '@/interfaces';

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

    const res = await callApi('GET', `/users/me`);
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
  ProfileFormValues,
  { rejectValue: string }
>(
  'users/updateUser',
  async (profileData: ProfileFormValues, { rejectWithValue }) => {
    try {
      const res = await callApi('PUT', `/users/me`, profileData);
      if (res.data) {
        return res as GetUserResponse;
      } else {
        return rejectWithValue('Failed to update user profile');
      }
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to update user profile');
    }
  }
);
