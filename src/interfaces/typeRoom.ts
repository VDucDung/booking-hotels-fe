import { Hotel } from "./hotel";

export interface Room {
  id: number;
  roomName: string;
  description: string;
  capacity: number;
  images: [string];
  options: [];
  price: number;
  bookingDate: Date;
  typeRoomId: TypeRoom;
}
export interface TypeRoom {
  id: number;
  name: string;
  description: string;
  rooms: Room[];
  hotel: Hotel;
}

export interface GettypeRoomsResponse{
  statusCode: number;
  message: string;
  data: TypeRoom[];
}

export interface TypeRoomState {
  typeRooms: TypeRoom[] | [];
  loading: boolean;
  statusCode: number | null;
  error: string | null;
  message: string;
}
