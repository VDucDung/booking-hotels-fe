import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { RoomType } from '@/type/roomType';

interface RoomTypeCreateModalProps {
  onClose: () => void;
  onCreate: (roomType: RoomType) => void;
}

const RoomTypeCreateModal: React.FC<RoomTypeCreateModalProps> = ({ onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState(1);
  const [basePrice, setBasePrice] = useState(0);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [newAmenity, setNewAmenity] = useState('');

  const handleAddAmenity = () => {
    if (newAmenity.trim() && !amenities.includes(newAmenity.trim())) {
      setAmenities([...amenities, newAmenity.trim()]);
      setNewAmenity('');
    }
  };

  const handleRemoveAmenity = (amenityToRemove: string) => {
    setAmenities(amenities.filter(amenity => amenity !== amenityToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || capacity < 1 || basePrice < 0) {
      alert('Vui lòng điền đầy đủ thông tin hợp lệ');
      return;
    }

    const newRoomType: RoomType = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      hotelId: 'hotel1',
      description,
      capacity,
      basePrice,
      amenities: amenities.length > 0 ? amenities : undefined,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    onCreate(newRoomType);
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

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Thêm Loại Phòng Mới</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Tên Loại Phòng</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="VD: Phòng Deluxe"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Mô Tả</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mô tả chi tiết về loại phòng"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Sức Chứa</label>
            <input 
              type="number" 
              value={capacity}
              onChange={(e) => setCapacity(parseInt(e.target.value))}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Giá Cơ Bản</label>
            <input 
              type="number" 
              value={basePrice}
              onChange={(e) => setBasePrice(parseInt(e.target.value))}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Tiện Nghi</label>
            <div className="flex">
              <input 
                type="text" 
                value={newAmenity}
                onChange={(e) => setNewAmenity(e.target.value)}
                className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập tiện nghi"
              />
              <button 
                type="button"
                onClick={handleAddAmenity}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {amenities.map((amenity) => (
                <span 
                  key={amenity} 
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  {amenity}
                  <button 
                    type="button"
                    onClick={() => handleRemoveAmenity(amenity)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <X size={16} />
                  </button>
                </span>
              ))}
            </div>
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
              Thêm Loại Phòng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomTypeCreateModal;
