"use client";

import React, { useState } from 'react';
import { Bed, Plus } from 'lucide-react';
import { RoomType } from '@/type/roomType';
import RoomTypeCreateModal from './RoomTypeCreateModal';


const RoomTypeList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomTypes, setRoomTypes] = useState<RoomType[]>([
    {
      id: '1',
      name: 'Phòng Tiêu Chuẩn',
      hotelId: 'hotel1',
      description: 'Phòng tiện nghi cơ bản cho một kỳ nghỉ thoải mái',
      capacity: 2,
      basePrice: 500000,
      amenities: ['Điều hòa', 'Tivi', 'Wifi'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'Phòng Deluxe',
      hotelId: 'hotel1',
      description: 'Phòng rộng rãi với view đẹp',
      capacity: 3,
      basePrice: 800000,
      amenities: ['Điều hòa', 'Tivi', 'Wifi', 'Ban công'],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  const handleCreateRoomType = (newRoomType: RoomType) => {
    setRoomTypes([...roomTypes, newRoomType]);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Bed className="mr-2 text-blue-500" size={24} />
          <h2 className="text-xl font-bold text-gray-800">Loại Phòng</h2>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600"
        >
          <Plus className="mr-2" size={20} />
          Thêm Loại Phòng
        </button>
      </div>

      <div className="space-y-4">
        {roomTypes.map((roomType) => (
          <div 
            key={roomType.id} 
            className="border-b pb-4 last:border-b-0 hover:bg-gray-50 p-2 rounded"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">{roomType.name}</h3>
                <p className="text-gray-600">Sức chứa: {roomType.capacity} người</p>
                <p className="text-blue-600 font-bold">
                  {new Intl.NumberFormat('vi-VN', { 
                    style: 'currency', 
                    currency: 'VND' 
                  }).format(roomType.basePrice)}
                </p>
              </div>
              <div className="flex space-x-2">
                <button 
                  className="text-blue-500 hover:text-blue-700"
                  // Add edit logic
                >
                  Sửa
                </button>
                <button 
                  className="text-red-500 hover:text-red-700"
                  // Add delete logic
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <RoomTypeCreateModal 
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateRoomType}
        />
      )}
    </div>
  );
};

export default RoomTypeList;
