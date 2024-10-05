"use client";
import HotelCard from "@/components/hotelCard/HotelCard";
import PaginationApp from "@/components/pagination/Pagination";

import { useState } from "react";

function Favorite() {
  const [currentPage, setCurrentPage] = useState(0);
  const hotels = [
    {
      id: 1,
      name: "Trăng vàng hoàng kim vinh hiển đỏ",
      reviews: {
        rating: 4.5,
        comment: 5,
      },
    },
    {
      id: 2,
      name: "Trăng vàng hoàng kim vinh hiển đỏ",
      reviews: {
        rating: 4.5,
        comment: 5,
      },
    },
    {
      id: 3,
      name: "Trăng vàng hoàng kim vinh hiển đỏ",
      reviews: {
        rating: 4.5,
        comment: 5,
      },
    },
    {
      id: 4,
      name: "Trăng vàng hoàng kim vinh hiển đỏ",
      reviews: {
        rating: 4.5,
        comment: 5,
      },
    },
    {
      id: 5,
      name: "Trăng vàng hoàng kim vinh hiển đỏ",
      reviews: {
        rating: 4.5,
        comment: 5,
      },
    },
    {
      id: 6,
      name: "Trăng vàng hoàng kim vinh hiển đỏ",
      reviews: {
        rating: 4.5,
        comment: 5,
      },
    },
  ];

  const handlePageChange = ({ selected } : { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="xl:p-4">
      <h2 className="text-2xl font-semibold text-dark shadow-md p-4">
        Danh sách yêu thích
      </h2>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            id={hotel.id}
            hotelName={hotel.name}
            reviews={hotel.reviews || null}
            images={'/images/booking-icon.jpg'}
            address="Địa điểm"
          />
        ))}
      </div>

      <PaginationApp
        pageCount={20}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        className="ml-auto mt-10"
      />
    </div>
  );
}

export default Favorite;
