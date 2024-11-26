import React from 'react';
import { Building, Phone, Star, MapPin } from 'lucide-react';
import { HotelType } from '@/type/hotel';

interface HotelCardProps {
  hotel: HotelType;
  onEdit?: () => void;
  onDelete?: () => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Building className="mr-2 text-blue-500" size={24} />
          <h2 className="text-xl font-bold text-gray-800">{hotel.name}</h2>
        </div>
        {hotel.rating && (
          <div className="flex items-center text-yellow-500">
            <Star size={20} fill="currentColor" />
            <span className="ml-1 font-semibold">{hotel.rating}/5</span>
          </div>
        )}
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="mr-2 text-green-500" size={20} />
          <span>{hotel.address}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="mr-2 text-blue-500" size={20} />
          <span>{hotel.phoneNumber}</span>
        </div>
      </div>

      {hotel.description && (
        <p className="text-gray-500 mb-4 line-clamp-2">{hotel.description}</p>
      )}

      <div className="flex justify-between">
        {onEdit && (
          <button 
            onClick={onEdit} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Chỉnh sửa
          </button>
        )}
        {onDelete && (
          <button 
            onClick={onDelete} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Xóa
          </button>
        )}
      </div>
    </div>
  );
};

export default HotelCard;
