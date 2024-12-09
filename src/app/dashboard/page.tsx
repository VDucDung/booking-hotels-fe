"use client";

import React, { useState } from 'react';
import {
  BarChart,
} from 'recharts';
import {
  Calendar,
  Hotel,
  BedDouble,
  BathIcon,
  MessageSquareText
} from 'lucide-react';
import Dashboard from '@/components/dashboard';
import HotelList from '@/components/Hotels/HotelList';
import RoomTypeList from '@/components/RoomTypes/RoomTypeList';
import RoomList from '@/components/Rooms/RoomList';
import Bookings from '@/components/booking';
import RatingManagement from '@/components/rating/RatingList';


const HotelDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'bookings':
        return <Bookings />;
      case 'hotels':
        return <HotelList />;
      case 'room_type':
        return <RoomTypeList />;
      case 'rooms':
        return <RoomList />;
      case 'ratings':
        return <RatingManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex mt-[115px]">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <nav className="p-4">
          <ul>
            <li
              className={`flex items-center p-3 rounded cursor-pointer ${activeTab === 'dashboard'
                ? 'bg-blue-100 text-blue-600'
                : 'hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('dashboard')}
            >
              <BarChart className="mr-3" /> Dashboard
            </li>
            <li
              className={`flex items-center p-3 rounded cursor-pointer ${activeTab === 'bookings'
                ? 'bg-blue-100 text-blue-600'
                : 'hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('bookings')}
            >
              <Calendar className="mr-3" /> Bookings
            </li>
            <li
              className={`flex items-center p-3 rounded cursor-pointer ${activeTab === 'hotels'
                ? 'bg-blue-100 text-blue-600'
                : 'hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('hotels')}
            >
              <Hotel className="mr-3" /> Hotels
            </li>
            <li
              className={`flex items-center p-3 rounded cursor-pointer ${activeTab === 'room_type'
                ? 'bg-blue-100 text-blue-600'
                : 'hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('room_type')}
            >
              <BedDouble className="mr-3" /> Room Type
            </li>
            <li
              className={`flex items-center p-3 rounded cursor-pointer ${activeTab === 'rooms'
                ? 'bg-blue-100 text-blue-600'
                : 'hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('rooms')}
            >
              <BathIcon className="mr-3" /> Rooms
            </li>

            <li
              className={`flex items-center p-3 rounded cursor-pointer ${activeTab === 'ratings'
                ? 'bg-blue-100 text-blue-600'
                : 'hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('ratings')}
            >
              <MessageSquareText className="mr-3" /> Ratings
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {renderContent()}
      </div>
    </div>
  );
};


export default HotelDashboard;
