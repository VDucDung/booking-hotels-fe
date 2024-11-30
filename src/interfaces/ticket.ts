import { Room } from "./typeRoom";

export interface Ticket {
  id?: number;
  checkInDate?: Date;
  checkOutDate: Date;
  paymentMethods?: string;
  status?: string;
  room: Room;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  option?: string[];
  checkInTime?: string;
  checkOutTime?: string;
  amount?: number;
  guestFullName?: string | null;
  stripePaymentIntentId?: string | null;
  stripeTransferId?: string | null;
  partnerId?: number;
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

export interface TicketData {
  roomId: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  guestFullName?: string;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
  amount: number;
  paymentMethods?: string;
  option: string[];
}

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  PAYMENT = 'PAYMENT',
  REFUND = 'REFUND',
  CASH = 'cash',
  BANK_CARD = 'bank card',
  WALLET = 'wallet',
}
