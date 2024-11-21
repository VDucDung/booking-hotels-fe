import { Hotel } from "./hotel";

export interface TypeRoom {
  id: number;
  name: string;
  description: string;
  rooms: Room[];
  hotel: Hotel;
}

export interface Room {
  id: number;
  roomName: string;
  description: string;
  capacity: number;
  images: string[];
  options: [];
  price: number;
  bookingDate: Date;
  typeRoomId: TypeRoom;
}

export interface GetRoomResponse{
  statusCode: number;
  message: string;
  data: Room;
}
