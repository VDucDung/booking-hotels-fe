export interface RoomType {
  id: string;
  name: string;
  hotelId: string;
  description: string;
  capacity: number;
  basePrice: number;
  amenities?: string[];
  createdAt: Date;
  updatedAt: Date;
}
