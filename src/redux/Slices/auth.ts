/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorageItem } from '@/utils/localStorage';
import { clearError, forgotPassword, loginGoogle, loginUser, registerUser, resetPassword, verifyOtpForgotPassword } from '@/api/authService';

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
    statusCode: null,
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

      // login with google
      .addCase(loginGoogle.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.user = null;
      state.isLogin = false;
    })
    .addCase(loginGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.statusCode === 200 ? action.payload.data.user : null;
      state.error = null;
      state.isLogin = true;
    })
    .addCase(loginGoogle.rejected, (state, action: any) => {
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
    })

    //verify Otp ForgotPassword
    .addCase(verifyOtpForgotPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(verifyOtpForgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.secretKey = action.payload.data;
      state.statusCode = action.payload.statusCode;
      state.message = action.payload.message;
    })
    .addCase(verifyOtpForgotPassword.rejected, (state, action: any) => {
      state.loading = false;
      state.statusCode = action.payload.statusCode;
      state.message = action.payload.message;
    })

    // forgot password
    .addCase(forgotPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.secretKey = action.payload.data;
      state.statusCode = action.payload.statusCode;
      state.message = action.payload.message;
    })
    .addCase(forgotPassword.rejected, (state, action: any) => {
      state.loading = false;
      state.statusCode = action.payload.statusCode;
      state.message = action.payload.message;
    })
    //reset password
    .addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.secretKey = action.payload.data;
      state.statusCode = action.payload.statusCode;
      state.message = action.payload.message;
    })
    .addCase(resetPassword.rejected, (state, action:any) => {
      state.loading = false;
      state.statusCode = action.payload.statusCode;
      state.message = action.payload.message;
    });
  },
});
export const { reFreshStatus, logout } = authSlice.actions;

export default authSlice.reducer;
