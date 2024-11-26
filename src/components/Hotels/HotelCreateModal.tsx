import React, { useState } from 'react';
import { Hotel, X, Plus } from 'lucide-react';
import { HotelType } from '@/type/hotel';

interface HotelCreateModalProps {
  onClose: () => void;
  onCreate: (hotel: HotelType) => void;
}

const HotelCreateModal: React.FC<HotelCreateModalProps> = ({ onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
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
    if (!name || !address || !phoneNumber) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    const newHotel: HotelType = {
      id: `HTL${Math.random().toString(36).substr(2, 4).toUpperCase()}`,
      name,
      address,
      phoneNumber,
      email,
      description: description || undefined,
      rating: rating || undefined,
      amenities: amenities.length > 0 ? amenities : undefined,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    onCreate(newHotel);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[500px] p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="flex items-center mb-6">
          <Hotel className="mr-2 text-blue-500" size={24} />
          <h2 className="text-2xl font-bold text-gray-800">Thêm Khách Sạn Mới</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Tên Khách Sạn *</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tên khách sạn"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Địa Chỉ *</label>
            <input 
              type="text" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập địa chỉ"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Số Điện Thoại *</label>
            <input 
              type="tel" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Mô Tả</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mô tả về khách sạn"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Đánh Giá</label>
            <input 
              type="number" 
              value={rating}
              onChange={(e) => setRating(parseFloat(e.target.value))}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập đánh giá (0-5)"
              min="0"
              max="5"
              step="0.1"
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
              Thêm Khách Sạn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelCreateModal;
