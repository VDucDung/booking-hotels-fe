import { ApiError } from "next/dist/server/api-utils";

export interface CategoryProps {
  className?: string;
}

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  statusCode: number | null;
  error: ApiError | null;
}

export interface Category {
  id: string | number;
  name: string;
  image: string;
}

export interface GetCategoriesResponse{
  statusCode: number;
  message: string;
  data: Category[];
}
