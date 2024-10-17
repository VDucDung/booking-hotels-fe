import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from './apiUtils';
import { GetHotelsResponse, ApiError, GetHotelResponse, HotelCredentials } from '@/interfaces';
import Cookies from 'js-cookie';

export const getHotels = createAsyncThunk<
  GetHotelsResponse,
  { sortBy?: string; page?: number; limit?: number, keyword?: string },
  {
    rejectValue: ApiError
  }
>('hotels/search', async (params: { sortBy?: string; page?: number; limit?: number, keyword?: string }, { rejectWithValue }) => {
  try {
    const customHeaders = {
      'accept-language': `${Cookies.get('lang')}`,
    };

    const queryString = `sortBy=${params.sortBy}&page=${params.page}&limit=${params.limit}&keyword=${params.keyword}`;

    const response = await callApi('GET', `/hotels/search?${queryString}`, null, null, customHeaders);
    if (response.statusCode === 200) {
      return response as GetHotelsResponse;
    } else {
      return rejectWithValue({ message: 'Failed to fetch hotels', status: response.statusCode });
    }
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({ message: error.message || 'Failed to fetch hotels', status: 500 });
    }
    return rejectWithValue({ message: 'An unknown error occurred', status: 500 });
  }
});



export const getHotel = createAsyncThunk<GetHotelResponse, HotelCredentials>(
  'hotels/id',
  async ({ hotelId }, { rejectWithValue }) => { 
    console.log(hotelId)
    try {
      const customHeaders = {
        'accept-language': `${Cookies.get('lang')}`,
      };
      const response = await callApi('GET', `/hotels/${hotelId}`, null, customHeaders);
      console.log(response)
      if (response.statusCode === 200) {
        return response as GetHotelResponse;
      } else {
        return rejectWithValue({ message: 'Failed to remove hotel', status: response.statusCode });
      }
    } catch (error) {
      if (error) {
        return rejectWithValue({ ...error }); 
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
);
