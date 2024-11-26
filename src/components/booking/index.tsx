import React from 'react';

const bookingsData = [
  { id: 'B001', guest: 'John Doe', room: 'Deluxe Suite', date: '2024-04-15', status: 'Confirmed' },
  { id: 'B002', guest: 'Jane Smith', room: 'Standard Room', date: '2024-04-16', status: 'Pending' },
  { id: 'B003', guest: 'Mike Johnson', room: 'Family Room', date: '2024-04-17', status: 'Confirmed' },
];

const Bookings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Bookings</h3>
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border text-left">Booking ID</th>
            <th className="p-3 border text-left">Guest</th>
            <th className="p-3 border text-left">Room</th>
            <th className="p-3 border text-left">Date</th>
            <th className="p-3 border text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingsData.map((booking) => (
            <tr key={booking.id} className="hover:bg-gray-50">
              <td className="p-3 border">{booking.id}</td>
              <td className="p-3 border">{booking.guest}</td>
              <td className="p-3 border">{booking.room}</td>
              <td className="p-3 border">{booking.date}</td>
              <td className="p-3 border">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    booking.status === 'Confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
