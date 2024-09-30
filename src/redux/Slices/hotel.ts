import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHotels } from '@/api/hotelService';
import { HotelState, GetHotelsResponse } from '@/interfaces';

const initialState: HotelState = {
  hotels: [],
  detailResult: null,
  loading: false,
  error: null,
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.hotels = [];
        state.detailResult = null;
      })
      .addCase(getHotels.fulfilled, (state, action: PayloadAction<GetHotelsResponse>) => {
        state.loading = false;
        state.hotels = action.payload.data.hotels;
        state.detailResult = action.payload.data.detailResult;
        state.error = null;
      })
      .addCase(getHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to load hotels';
        state.hotels = [];
        state.detailResult = null;
      });
  },
});

export default hotelSlice.reducer;
