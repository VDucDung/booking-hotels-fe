export interface HotelType {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  description?: string;
  rating?: number;
  amenities?: string[];
  createdAt: Date;
  updatedAt: Date;
}
