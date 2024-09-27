/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserCredentials {
  fullname?: string;
  email: string;
  password: string;
}

export interface ApiResponse {
  code: number;
  data?: any;
  message?: string;
}

export interface GoogleLoginResponse {
  access_token: string;
}

export interface UserInfoResponse {
  status: number;
  access_token: string;
  data: any; 
}


export  interface LoginWithGoogleState {
  loading: boolean;
  user: any | null; 
  error: string | null;
  isLogin: boolean | null;
}
