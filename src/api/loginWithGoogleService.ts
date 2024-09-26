/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface GoogleLoginResponse {
  access_token: string;
}

interface UserInfoResponse {
  status: number;
  access_token: string;
  data: any; 
}

export const loginWithGoogle = createAsyncThunk<UserInfoResponse, GoogleLoginResponse>(
  'loginWithGoogle',
  async (response: GoogleLoginResponse, { rejectWithValue }) => {
    try {
      const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${response.access_token}`,
        },
      });
      return { status: res.status, access_token: response.access_token, data: res.data };
    } catch (err: any) {
      if (err.response) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue('Đã xảy ra lỗi không mong đợi');
    }
  }
);
