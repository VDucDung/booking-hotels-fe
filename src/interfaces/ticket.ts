import { Room } from "./typeRoom";

export interface Ticket {
  id: string | number;
  checkInDate: Date;
  checkOutDate: Date;
  paymentMethods: string;
  status: string;
  room: Room
}
export interface TicketState {
  tickets: Ticket[];
  loading: boolean;
  statusCode: number | null;
  error: string | null;
}
export interface GetTicketsResponse{
  statusCode: number;
  message: string;
  data: Ticket[];
}
