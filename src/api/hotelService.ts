
import { Hotel } from '@/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from './apiUtils';
import Cookies from 'js-cookie';

export const getHotels = createAsyncThunk<Hotel[], void>(
  'hotels',
  async () => {
    try{
      const customHeaders = {
        'accept-language': `${Cookies.get('lang')}`,
      };
      const res = await callApi('POST', `/hotels`, customHeaders);
      return res;
    }catch(err) {
      throw err;
    }
  }
);
