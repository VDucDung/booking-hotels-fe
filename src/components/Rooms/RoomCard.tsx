import React from 'react';
import { Bed, Key, Edit, Trash2 } from 'lucide-react';
import { Room } from '@/type/room';

interface RoomCardProps {
  room: Room;
  roomTypeName?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ 
  room, 
  roomTypeName, 
  onEdit, 
  onDelete 
}) => {
  const getStatusStyle = (status: Room['status']) => {
    switch (status) {
      case 'available':
        return {
          color: 'bg-green-100 text-green-800',
          text: 'Sẵn sàng'
        };
      case 'occupied':
        return {
          color: 'bg-red-100 text-red-800',
          text: 'Đã đặt'
        };
      case 'maintenance':
        return {
          color: 'bg-yellow-100 text-yellow-800',
          text: 'Bảo trì'
        };
    }
  };

  const statusStyle = getStatusStyle(room.status);

  return (
    <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Key className="mr-2 text-blue-500" size={24} />
          <h2 className="text-xl font-bold text-gray-800">
            Phòng {room.roomNumber}
          </h2>
        </div>
        <span 
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle.color}`}
        >
          {statusStyle.text}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Bed className="mr-2 text-blue-400" size={20} />
          <span>
            {roomTypeName 
              ? `Loại: ${roomTypeName}` 
              : 'Chưa xác định'}
          </span>
        </div>
        {room.floor && (
          <div className="flex items-center text-gray-600">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2 text-gray-500" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8h8V6z" 
                clipRule="evenodd" 
              />
            </svg>
            <span>Tầng {room.floor}</span>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Ngày tạo: {room.createdAt.toLocaleDateString()}
        </p>
        <div className="flex space-x-2">
          {onEdit && (
            <button 
              onClick={onEdit}
              className="text-blue-500 hover:text-blue-700 transition-colors"
              title="Chỉnh sửa"
            >
              <Edit size={20} />
            </button>
          )}
          {onDelete && (
            <button 
              onClick={onDelete}
              className="text-red-500 hover:text-red-700 transition-colors"
              title="Xóa"
            >
              <Trash2 size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
