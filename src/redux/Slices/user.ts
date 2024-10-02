/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUsers, getUser, updateUser } from '@/api/userService';
import { GetUsersResponse, GetUserResponse, UserState } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser(state, action: PayloadAction<GetUserResponse>) {
      state.selectedUser = action.payload as any;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.users = [];
        state.selectedUser = null;
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<GetUsersResponse>) => {
        state.loading = false;
        state.users = action.payload.data.users;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load users';
        state.users = [];
        state.selectedUser = null;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedUser = null;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<GetUserResponse>) => {
        state.loading = false;
        state.selectedUser = action.payload.data as any;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load user details';
        state.selectedUser = null;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload as any;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update user';
      });
  },
});

export const { setSelectedUser } = userSlice.actions;

export default userSlice.reducer;
