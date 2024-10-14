/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Hotel {
  id: number;
  name: string;
  address: string;
  rating: number;
  reviews: number;
  images: string;
  hotelName: string;
  avgRating: number;
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
  avgRating: number;
  images: string| null;
  className?: string;
}
export interface HotelCardListProps {
  hotels?: Hotel[];
}

export interface GetHotelsResponse {
  data: Hotel[]
  statusCode: number;
  message: string;
}
