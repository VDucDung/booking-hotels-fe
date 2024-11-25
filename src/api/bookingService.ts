import { BookingFormData, BookingResponse } from '@/interfaces/booking';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createBooking = async (data: BookingFormData): Promise<BookingResponse> => {
  const response = await axios.post(`${API_URL}/tickets`, data);
  return response.data;
};
