"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Room } from '@/type/room';

interface RoomCreateModalProps {
  onClose: () => void;
  onCreate: (room: Room) => void;
}

const RoomCreateModal: React.FC<RoomCreateModalProps> = ({ onClose, onCreate }) => {
  const [roomNumber, setRoomNumber] = useState('');
  const [roomTypeId, setRoomTypeId] = useState('');
  const [status, setStatus] = useState<Room['status']>('available');
  const [floor, setFloor] = useState<number | undefined>(undefined);

  const roomTypes = [
    { id: '1', name: 'Phòng Tiêu Chuẩn' },
    { id: '2', name: 'Phòng Deluxe' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!roomNumber || !roomTypeId) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    const newRoom: Room = {
      id: Math.random().toString(36).substr(2, 9),
      roomNumber,
      roomTypeId,
      hotelId: 'hotel1', 
      status,
      floor: floor || undefined,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    onCreate(newRoom);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Thêm Phòng Mới</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Số Phòng</label>
            <input 
              type="text" 
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập số phòng"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Loại Phòng</label>
            <select 
              value={roomTypeId}
              onChange={(e) => setRoomTypeId(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Chọn loại phòng</option>
              {roomTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Trạng Thái</label>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value as Room['status'])}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="available">Sẵn sàng</option>
              <option value="occupied">Đã đặt</option>
              <option value="maintenance">Bảo trì</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Tầng</label>
            <input 
              type="number" 
              value={floor || ''}
              onChange={(e) => setFloor(e.target.value ? parseInt(e.target.value) : undefined)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tầng (tùy chọn)"
              min="1"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button 
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Hủy
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Thêm Phòng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomCreateModal;
