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
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
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
