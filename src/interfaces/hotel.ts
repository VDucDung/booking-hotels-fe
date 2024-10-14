/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Hotel {
  hotel_id: number;
  hotel_hotelName: string;
  hotel_address: string;
  hotel_description?: string;
  hotel_total_reviews: number;
  hotel_images: string;
  hotel_avg_rating: number;
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
  totalReviews: number;
  avgRating: number;
  images: string| null;
  className?: string;
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
