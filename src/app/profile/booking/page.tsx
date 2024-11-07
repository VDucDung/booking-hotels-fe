/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from "next/image";
import images from "@/assets/images";
import React, { useEffect } from 'react';
import { Heart, CheckCircle, AlertCircle } from 'lucide-react';
import { useAppDispatch, useAppSelector } from "@/redux";
import { getTickets } from "@/api/getTicketService";
import Loading from "@/components/loading";
import { formatDate } from "@/utils/formatDate";

function HotelBookingCard() {
  const isEmpty = false;
  const ditpatch = useAppDispatch();
  const { tickets, loading } = useAppSelector((state) => state.ticket)
  // const bookings = [
  //   {
  //     id: 1,
  //     hotelName: "Aparthotel Stare Miasto",
  //     location: "Old Town, Kraków",
  //     roomType: "Suite Junior",
  //     rating: 8.8,
  //     reviews: 3022,
  //     locationScore: 9.8,
  //     details: {
  //       beds: "1 giường đôi lớn",
  //       roomSize: "33m²",
  //       amenities: ["1 phòng ngủ", "1 phòng khách", "1 phòng tắm"]
  //     },
  //     dates: {
  //       checkIn: "T6, 11 tháng 10",
  //       checkOut: "T7, 12 tháng 10"
  //     },
  //     guests: "1 đêm, 2 người lớn",
  //     price: "6,267,987",
  //     image: "/api/placeholder/400/300",
  //     distance: "Cách trung tâm 300m",
  //     paymentStatus: "pending",
  //     paymentDue: "17/11/2024"
  //   },
  //   {
  //     id: 2,
  //     hotelName: "Stradom House, Autograph Collection",
  //     location: "Old Town, Kraków",
  //     roomType: "Phòng Hiện đại có 2 Giường Đơn",
  //     rating: 9.4,
  //     reviews: 569,
  //     locationScore: 9.6,
  //     details: {
  //       beds: "2 giường đơn",
  //       amenities: ["2 phòng ngủ", "1 phòng tắm"]
  //     },
  //     dates: {
  //       checkIn: "T6, 11 tháng 10",
  //       checkOut: "T7, 12 tháng 10"
  //     },
  //     guests: "1 đêm, 2 người lớn",
  //     price: "5,869,115",
  //     image: "/api/placeholder/400/300",
  //     distance: "Cách trung tâm 1.1km",
  //     paymentStatus: "paid",
  //     paidDate: "15/11/2024"
  //   }
  // ];

  useEffect(() => {
    ditpatch(getTickets())
  }, [ditpatch])

  const handlePayment = (bookingId: number) => {
    console.log('Processing payment for booking:', bookingId);
  };

  if (loading) {
    return <Loading className="mx-auto" />
  }

  const PaymentStatusBadge = ({ status, dueDate, paidDate }: { status: string, dueDate: string, paidDate: string }) => {
    if (status === 'done') {
      return (
        <div className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-green-100 text-green-800">
          <CheckCircle className="w-4 h-4 mr-1" />
          <span>Đã thanh toán {paidDate}</span>
        </div>
      );
    }
    return (
      <div className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
        <AlertCircle className="w-4 h-4 mr-1" />
        <span>Chưa thanh toán - Hạn cuối {dueDate}</span>
      </div>
    );
  };

  return (
    <div className="xl:p-4">
      <h2 className="text-2xl font-semibold text-black shadow-md p-4">
        Danh sách đơn đặt phòng của bạn
      </h2>
      {isEmpty ? (
        <div className="mt-3">
          <div className="flex justify-center">
            <Image src={images.empty} alt="empty" width={300} height={300} />
          </div>
          <div className="text-center mt-3">Bạn hiện không có đơn hàng nào</div>
        </div>
      ) : (
        <div className="space-y-4 w-full max-w-4xl mx-auto p-4">
          {tickets && tickets.length > 0 && tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="flex">
                {/* Hotel Image Section */}
                <div className="relative w-72 h-48">
                  <Image
                    src={ticket?.room?.images[0]}
                    alt={ticket?.room?.typeRoomId?.hotel?.hotelName}
                    width={300} height={300}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-semibold text-blue-600">
                          {ticket?.room?.typeRoomId?.hotel?.hotelName}
                        </h2>
                        <div className="flex items-center">
                          {"★★★★".split("").map((star, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                        {ticket?.room?.typeRoomId?.hotel?.address}
                      </p>
                    </div>
                    <div className="flex flex-col items-end w-[140px]">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">Tuyệt vời</span>
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-r rounded-tl">
                        {ticket?.room?.typeRoomId?.hotel?.reviews.length > 0
                          ? (
                            ticket.room.typeRoomId.hotel.reviews.reduce(
                              (total, review) => total + review.rating,
                              0
                            ) / ticket.room.typeRoomId.hotel.reviews.length
                          ).toFixed(1)
                          : 'Chưa có đánh giá'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{ticket?.room?.typeRoomId?.hotel?.reviews.length} đánh giá</p>
                      {/* <p className="text-sm">
                        Địa điểm{' '}
                        {ticket?.room?.typeRoomId?.hotel?.reviews.length > 0
                          ? (
                            ticket.room.typeRoomId.hotel.reviews.reduce(
                              (total, review) => total + review.rating,
                              0
                            ) / ticket.room.typeRoomId.hotel.reviews.length
                          ).toFixed(1)
                          : 'Chưa có đánh giá'}
                      </p> */}

                    </div>
                  </div>

                  {/* Payment Status */}
                  <div className="mt-2">
                    <PaymentStatusBadge
                      status={ticket.status}
                      dueDate={formatDate(ticket.checkInDate) as string}
                      paidDate={formatDate(ticket?.room?.bookingDate) as string}
                    />
                  </div>

                  {/* Room Details */}
                  <div className="mt-4">
                    <h3 className="font-semibold">{ticket?.room?.roomName}</h3>
                    <div className="flex gap-2 text-sm text-gray-600 mt-1">
                      {ticket?.room?.options.map((option: any, index) => (
                        <span key={index} className="after:content-['•'] after:ml-2 last:after:content-none">
                          {option.feature} - {option.availability ? "available" : "not available"}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{ticket?.room?.description}</p>
                  </div>

                  {/* ticket Details */}
                  <div className="flex justify-between items-end mt-4">
                    <div>
                      <p className="text-sm">{formatDate(ticket.checkInDate)} - {formatDate(ticket.checkOutDate)}</p>
                      <p className="text-sm text-gray-600">{ticket?.room?.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">VND {ticket?.room?.price}</p>
                      <p className="text-sm text-gray-600">Đã bao gồm thuế và phí</p>
                      <div className="mt-2 space-x-2">
                        {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                          Xem chi tiết
                        </button> */}
                        {ticket.status === 'pending' && (
                          <button
                            onClick={() => handlePayment(ticket.id as number)}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                          >
                            Thanh toán ngay
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
      }
    </div>
  );
}

export default HotelBookingCard;
