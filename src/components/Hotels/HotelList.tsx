"use client";

import React, { useState } from 'react';
import { Plus, Hotel } from 'lucide-react';
import HotelCreateModal from './HotelCreateModal';
import HotelCard from './HotelCard';
import { HotelType } from '@/type/hotel';

const HotelList: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [hotels, setHotels] = useState<HotelType[]>([
    {
      id: 'HTL001',
      name: 'Luxury Oceanview Resort',
      address: '123 Bãi Biển, Nha Trang, Khánh Hòa',
      phoneNumber: '0258 3838 999',
      email: 'info@oceanviewresort.com',
      description: 'Khách sạn 5 sao với tầm nhìn ra biển tuyệt đẹp, dịch vụ đẳng cấp quốc tế.',
      rating: 4.5,
      amenities: ['Bể bơi vô cực', 'Spa', 'Nhà hàng', 'Phòng tập gym', 'WiFi miễn phí'],
      createdAt: new Date('2022-03-15'),
      updatedAt: new Date()
    },
    {
      id: 'HTL002',
      name: 'Mountain Retreat Hotel',
      address: '456 Đèo Tình Yêu, Đà Lạt, Lâm Đồng',
      phoneNumber: '0263 3666 222',
      email: 'reservations@mountainretreat.com',
      description: 'Khách sạn nghỉ dưỡng sang trọng giữa không gian núi non hùng vĩ.',
      rating: 4.2,
      amenities: ['View núi', 'Nhà hàng Âu Á', 'Dịch vụ đưa đón', 'Xe đạp miễn phí', 'Lửa trại'],
      createdAt: new Date('2021-11-20'),
      updatedAt: new Date()
    },
    {
      id: 'HTL003',
      name: 'Urban Comfort Inn',
      address: '789 Phố Trung Tâm, Hồ Chí Minh',
      phoneNumber: '0283 9999 111',
      email: 'contact@urbancomfortinn.com',
      description: 'Khách sạn hiện đại tọa lạc tại trung tâm thành phố, thuận tiện cho du khách.',
      rating: 4.0,
      amenities: ['Miễn phí ăn sáng', 'Quầy bar', 'Dịch vụ phòng 24/7', 'Nhà hàng', 'Xe đưa đón sân bay'],
      createdAt: new Date('2023-01-10'),
      updatedAt: new Date()
    }
  ]);

  const handleCreateHotel = (newHotel: HotelType) => {
    setHotels([...hotels, newHotel]);
    setShowModal(false);
  };

  const handleDeleteHotel = (hotelId: string) => {
    setHotels(hotels.filter(hotel => hotel.id !== hotelId));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Hotel className="mr-2 text-blue-500" size={24} />
          <h2 className="text-2xl font-semibold text-gray-800">Khách Sạn</h2>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          <Plus className="mr-2" /> Thêm Khách Sạn
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map(hotel => (
          <HotelCard 
            key={hotel.id} 
            hotel={hotel}
            onDelete={() => handleDeleteHotel(hotel.id)}
          />
        ))}
      </div>

      {showModal && (
        <HotelCreateModal 
          onClose={() => setShowModal(false)}
          onCreate={handleCreateHotel}
        />
      )}
    </div>
  );
};

export default HotelList;
