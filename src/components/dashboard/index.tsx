"use client";

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Calendar, 
  Users, 
  CreditCard, 
  Hotel, 
  ChevronDown 
} from 'lucide-react';

const bookingData = [
  { month: 'Jan', bookings: 42, revenue: 15000 },
  { month: 'Feb', bookings: 55, revenue: 19500 },
  { month: 'Mar', bookings: 38, revenue: 13200 },
  { month: 'Apr', bookings: 64, revenue: 22400 },
  { month: 'May', bookings: 52, revenue: 18000 },
];

const recentBookings = [
  { id: 'B001', guest: 'John Doe', room: 'Deluxe Suite', date: '2024-04-15', status: 'Confirmed' },
  { id: 'B002', guest: 'Jane Smith', room: 'Standard Room', date: '2024-04-16', status: 'Pending' },
  { id: 'B003', guest: 'Mike Johnson', room: 'Family Room', date: '2024-04-17', status: 'Confirmed' },
];

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 p-10">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-white shadow-sm rounded-full p-2">
              <Users size={20} />
            </div>
            <div className="bg-white shadow-sm rounded-full p-2">
              <CreditCard size={20} />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-500 mb-2">Total Bookings</h3>
                <p className="text-2xl font-bold">240</p>
              </div>
              <Calendar className="text-blue-500" size={36} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-500 mb-2">Total Revenue</h3>
                <p className="text-2xl font-bold">$86,500</p>
              </div>
              <CreditCard className="text-green-500" size={36} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-500 mb-2">Occupancy Rate</h3>
                <p className="text-2xl font-bold">65%</p>
              </div>
              <Hotel className="text-purple-500" size={36} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Monthly Bookings</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bookingData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bookings" fill="#3B82F6" />
                <Bar dataKey="revenue" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Bookings</h3>
              <button className="text-blue-600 flex items-center">
                View All <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Booking ID</th>
                  <th className="p-2 text-left">Guest</th>
                  <th className="p-2 text-left">Room</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b">
                    <td className="p-2">{booking.id}</td>
                    <td className="p-2">{booking.guest}</td>
                    <td className="p-2">{booking.room}</td>
                    <td className="p-2">
                      <span className={`
                        px-2 py-1 rounded-full text-xs
                        ${booking.status === 'Confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'}
                      `}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
