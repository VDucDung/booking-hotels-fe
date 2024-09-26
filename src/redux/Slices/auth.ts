import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorageItem } from '@/utils/localStorage';
import { clearError, loginUser, registerUser } from '@/api/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    user: getLocalStorageItem('user') || null,
    error: null,
    isLogin: getLocalStorageItem('user') ? true : null,
    status: null,
    secretKey: '',
    message: '',
    isUpdate: false,
  },

  reducers: {
    reFreshStatus: (state) => {
      state.status = null;
      state.secretStatus = null;
    },
  },

  // update secret key

  extraReducers: (builder) => {
    builder

      // login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null;
        state.isLogin = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.code === 200 ? action.payload.data.user : null;
        state.error = null;
        state.isLogin = action.payload.code === 200 ? true : false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload.message;
        state.isLogin = null;
      })

      // register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
        state.isLogin = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isLogin = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
        state.isLogin = null;
      })
      .addCase(clearError.fulfilled, (state) => {
        state.error = null;
      });
  },
});

export const { reFreshStatus } = authSlice.actions;
export default authSlice.reducer;
