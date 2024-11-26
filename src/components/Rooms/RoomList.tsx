"use client";

import React, { useState } from 'react';
import { Key, Plus } from 'lucide-react';
import { Room } from '@/type/room';
import RoomCreateModal from './RoomCreateModal';


const RoomList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: '1',
      roomNumber: '101',
      roomTypeId: '1',
      hotelId: 'hotel1',
      status: 'available',
      floor: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      roomNumber: '202',
      roomTypeId: '2',
      hotelId: 'hotel1',
      status: 'occupied',
      floor: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  const handleCreateRoom = (newRoom: Room) => {
    setRooms([...rooms, newRoom]);
    setIsModalOpen(false);
  };

  const getStatusColor = (status: Room['status']) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-50';
      case 'occupied': return 'text-red-600 bg-red-50';
      case 'maintenance': return 'text-yellow-600 bg-yellow-50';
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Key className="mr-2 text-blue-500" size={24} />
          <h2 className="text-xl font-bold text-gray-800">Phòng</h2>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600"
        >
          <Plus className="mr-2" size={20} />
          Thêm Phòng
        </button>
      </div>

      <div className="space-y-4">
        {rooms.map((room) => (
          <div 
            key={room.id} 
            className="border-b pb-4 last:border-b-0 hover:bg-gray-50 p-2 rounded"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">
                  Phòng {room.roomNumber}
                </h3>
                <p className="text-gray-600">Tầng {room.floor}</p>
                <span 
                  className={`px-2 py-1 rounded text-sm font-medium ${getStatusColor(room.status)}`}
                >
                  {room.status === 'available' 
                    ? 'Sẵn sàng' 
                    : room.status === 'occupied' 
                    ? 'Đã đặt' 
                    : 'Bảo trì'}
                </span>
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
        <RoomCreateModal 
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateRoom}
        />
      )}
    </div>
  );
};

export default RoomList;
