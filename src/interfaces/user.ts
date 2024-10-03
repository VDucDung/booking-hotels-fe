import { DetailResult } from "./detailResult";

export interface User {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  password: string;
  avartar: string;
  dateOfBirth: Date;
}
export interface UserState {
  users: User[];
  isUpdate: boolean;
  loading: boolean;
  error: string | null;
  message: string;
}


export interface GetUsersResponse {
  data: {
    users: User[];
    detailResult: DetailResult;
  };
  statusCode: number;
  message: string;
}

export interface GetUserResponse {
  data: {
    user: User;
    detailResult: DetailResult;
  };
  statusCode: number;
  message: string;
}
