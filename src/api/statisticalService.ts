/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from './apiUtils';
import { hostname } from 'os';

export const statistical = createAsyncThunk('statistical', async (_, { rejectWithValue }) => {
  try {
    const response = await callApi('GET', `${hostname}health-check`, null, {});
    return response;
  } catch (error) {
    return rejectWithValue({ ...error as any });
  }
});
