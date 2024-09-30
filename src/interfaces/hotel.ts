/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Hotel {
  id: number;
  name: string;
  address: string;
  rating: number;
  reviews: number;
  images: string;
  hotelName: string;
}

export interface HotelState {
  hotels: Hotel[];
  loading: boolean;
  error: string | null;
  detailResult: any; 
}


export interface HotelCardProps {
  id: number;
  hotelName: string;
  address: string;
  reviews: any;
  images: string;
}
export interface HotelCardListProps {
  hotels: Hotel[];
}

export interface DetailResult {
  limit: number;
  totalResult: number;
  totalPage: number;
  currentPage: number;
  currentResult: number;
}

export interface GetHotelsResponse {
  data: {
    hotels: Hotel[];
    detailResult: DetailResult;
  };
  statusCode: number;
  message: string;
}
