export interface Room {
  id: string;
  roomNumber: string;
  roomTypeId: string;
  hotelId: string;
  status: 'available' | 'occupied' | 'maintenance';
  floor?: number;
  createdAt: Date;
  updatedAt: Date;
}
