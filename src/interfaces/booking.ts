export interface BookingFormData {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  guestName: string;
  options: string[];
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
}

export interface BookingResponse {
  statusCode: number;
  message: string;
  data: BookingFormData;
}
