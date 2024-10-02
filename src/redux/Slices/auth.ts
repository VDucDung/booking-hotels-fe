/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorageItem } from '@/utils/localStorage';
import { clearError, loginUser, registerUser } from '@/api/authService';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    user: (getLocalStorageItem('user') || null) as any,
    error: null as string | null,
    isLogin: false,
    status: null,
    secretKey: '',
    message: '',
    isUpdate: false,
    secretStatus: null,
  },

  reducers: {
    reFreshStatus: (state) => {
      state.status = null;
      state.secretStatus = null;
    },
    logout: (state) => {
      state.user = null;
      state.isLogin = false;
      state.error = null;
      state.message = '';
    },
  },

  extraReducers: (builder) => {
    builder

      // login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null;
        state.isLogin = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.statusCode === 200 ? action.payload.data.user : null;
        state.error = null;
        state.isLogin = true;
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload.message;
        state.isLogin = false;
      })

      // register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
        state.isLogin = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isLogin = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message ? action.error.message : null;
        state.isLogin = false;
      })
      .addCase(clearError.fulfilled, (state) => {
        state.error = null;
      });
  },
});
export const { reFreshStatus, logout } = authSlice.actions;

export default authSlice.reducer;
