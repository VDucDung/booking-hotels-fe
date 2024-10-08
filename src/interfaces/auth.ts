/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserCredentials {
  fullname?: string;
  email: string;
  password: string;
}

export interface LoginGoogleCredentials {
  name?: string;
  email: string;
  provider: string;
  providerId: string;
  avatar: string;
}

export interface ApiResponse {
  statusCode: number;
  data?: any;
  message?: string;
  url?: string;
}

export interface GoogleLoginResponse {
  access_token: string;
}

export interface UserInfoResponse {
  status: number;
  accessToken: string;
  data: any; 
}


export  interface LoginWithGoogleState {
  loading: boolean;
  user: any | null; 
  error: string | null;
  isLogin: boolean | null;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface OtpForgotPasswordData{
  token: string;
  otp: string;
}

export interface ApiError {
  message: string;
  code?: number;
}
