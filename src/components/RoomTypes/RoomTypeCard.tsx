import React from 'react';
import { 
  Bed, 
  Users, 
  DollarSign, 
  Edit, 
  Trash2, 
  CheckCircle 
} from 'lucide-react';
import { RoomType } from '@/type/roomType';

interface RoomTypeCardProps {
  roomType: RoomType;
  onEdit?: () => void;
  onDelete?: () => void;
}

const RoomTypeCard: React.FC<RoomTypeCardProps> = ({ 
  roomType, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Bed className="mr-2 text-blue-500" size={24} />
          <h2 className="text-xl font-bold text-gray-800">
            {roomType.name}
          </h2>
        </div>
        <div className="flex items-center text-green-600">
          <Users className="mr-1" size={18} />
          <span className="font-semibold">{roomType.capacity} người</span>
        </div>
      </div>

      {roomType.description && (
        <p className="text-gray-600 mb-4 line-clamp-2">
          {roomType.description}
        </p>
      )}

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <DollarSign className="mr-2 text-green-500" size={20} />
          <span className="font-bold text-blue-600">
            {new Intl.NumberFormat('vi-VN', { 
              style: 'currency', 
              currency: 'VND' 
            }).format(roomType.basePrice)}
          </span>
        </div>

        {roomType.amenities && roomType.amenities.length > 0 && (
          <div>
            <div className="flex items-center text-gray-600 mb-2">
              <CheckCircle className="mr-2 text-green-500" size={20} />
              <span className="font-semibold">Tiện Nghi</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {roomType.amenities.map((amenity) => (
                <span 
                  key={amenity} 
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Ngày tạo: {roomType.createdAt.toLocaleDateString()}
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

export default RoomTypeCard;
