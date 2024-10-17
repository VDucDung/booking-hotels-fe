/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Hotel {
  id: number;
  hotelName: string;
  address: string;
  description?: string;
  images: [string];
  totalReviews: number;
  avgRating: number;
  favorites?: any;
  partners?: any;
  typeRooms?: any;
}

export interface HotelState {
  hotels: Hotel[];
  hotel: Hotel | null;
  loading: boolean;
  error: string | null;
  detailResult: any; 
}


export interface HotelCardProps {
  id: number;
  hotelName: string;
  address: string;
  totalReviews: number;
  avgRating: number;
  images: string| null;
  className?: string;
  favorites?: boolean;
  onLikeSuccess: any;
}
export interface HotelCardListProps {
  hotels?: Hotel[];
}

export interface GetHotelsResponse {
  data: {
    hotels: Hotel[],
    detailResult: any
  }
  statusCode: number;
  message: string;
}

export interface HotelCredentials {
  hotelId: number;
}
export interface GetHotelResponse {
  data: Hotel,
  statusCode: number;
  message: string;
}
