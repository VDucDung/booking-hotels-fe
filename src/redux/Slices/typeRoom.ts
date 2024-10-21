/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTypeRoomByHotelId } from '@/api/typeRoomService';
import { TypeRoomState } from '@/interfaces/typeRoom';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TypeRoomState = {
  typeRooms: [],
  loading: false,
  error: null,
  statusCode: null,
  message: '',
};

const typeRoomSlice = createSlice({
  name: 'typeRoom',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTypeRoomByHotelId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTypeRoomByHotelId.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.typeRooms = action.payload.data;
        state.statusCode = action.payload.statusCode;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(getTypeRoomByHotelId.rejected, (state: any, action: any) => {
        state.loading = false;
        state.statusCode = action.payload.statusCode;
        state.error = action.payload || { message: 'An unknown error occurred', status: 500 };
        state.Favories = [];
      });
  },
});

export default typeRoomSlice.reducer;
