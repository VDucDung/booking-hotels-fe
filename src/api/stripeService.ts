/* eslint-disable @typescript-eslint/no-explicit-any */
import { hostname } from '@/utils';
import Cookies from 'js-cookie';

export class StripeService {
  private static getHeaders() {
    const token = Cookies.get('token');
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'accept-language': Cookies.get('lang') || 'vi'
    };
  }

  public static async createStripeAccount(): Promise<string> {
    try {
      const response = await fetch(`${hostname}stripe/create-stripe-account`, {
        method: 'POST',
        headers: this.getHeaders(),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      
      const accountLink = data?.data?.onboardingUrl || data?.onboardingUrl;
      
      if (!accountLink) {
        throw new Error('Invalid response structure');
      }

      return accountLink;
    } catch (error: any) {
      console.error('Stripe service error:', error);
      throw error;
    }
  }
}
