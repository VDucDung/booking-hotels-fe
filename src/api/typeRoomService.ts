import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from './apiUtils';
import { ApiError } from '@/interfaces';
import { GettypeRoomsResponse } from '@/interfaces/typeRoom';

export const getTypeRoomByHotelId = createAsyncThunk<
GettypeRoomsResponse,
{ hotelId: number },
  {
    rejectValue: ApiError
  }
>('typeRooms/getTypeRoomByHotelId', async ({ hotelId }, { rejectWithValue }) => {
  try {
    const response = await callApi('GET', `/type-room/hotel/${hotelId}`);
    console.log(response);
    if (response.statusCode === 200) {
      return response as GettypeRoomsResponse;
    } else {
      return rejectWithValue({ message: 'Failed to fetch categories', status: response.statusCode });
    }
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({ message: error.message || 'Failed to fetch categories', status: 500 });
    }
    return rejectWithValue({ message: 'An unknown error occurred', status: 500 });
  }
});
