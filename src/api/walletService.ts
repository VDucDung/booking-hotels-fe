import { getLocalStorageItem } from '@/utils';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = getLocalStorageItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const walletApi = {
  getWalletInfo: () => api.get('/wallets'),
  getTransactions: (page: number = 1, limit: number = 10) => 
    api.get(`/wallets/transactions?page=${page}&limit=${limit}`),
  createPaymentIntent: (amount: number) => 
    api.post('/stripe/create-payment-intent', { amount, currency: 'vnd' }),
  createCheckoutSession: (amount: number) => 
    api.post('/stripe/create-checkout-session', { amount }),
};
