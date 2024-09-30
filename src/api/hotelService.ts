import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from './apiUtils';
import { GetHotelsResponse } from '@/interfaces';

export const getHotels = createAsyncThunk<GetHotelsResponse, void>(
  'hotels/getHotels',
  async (_, { rejectWithValue }) => {
    try {

    const res = await callApi('GET', `/hotels`);
    if (res.data) {
      return res as GetHotelsResponse;
    } else {
      return rejectWithValue('Failed to fetch hotels');
    }
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch hotels');
    }
  }
);
