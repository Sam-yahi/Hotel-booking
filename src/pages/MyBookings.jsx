import React from 'react';
import { useBookings } from '../context/BookingContext';

export const MyBookings = () => {
  const { bookings } = useBookings();

  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return d;
    }
  };

  if (!bookings || bookings.length === 0) {
    return (
      <div className="py-28 text-center">
        <p className="text-gray-500">You haven't made any bookings yet.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 md:px-16 lg:px-24">
      <h1 className="text-3xl font-semibold mb-6">My Bookings</h1>
      <div className="space-y-6">
        {bookings.map((b, idx) => {
          const { room, checkIn, checkOut } = b;
          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-white shadow rounded-lg overflow-hidden"
            >
              <img
                src={room.images[0]}
                alt="room"
                className="w-full md:w-48 h-40 object-cover"
              />
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-medium">
                    {room.hotel.name}{' '}
                    <span className="text-sm font-light">
                      ({room.roomType})
                    </span>
                  </h2>
                  <p className="text-sm text-gray-500">
                    {room.hotel.address}
                  </p>
                  <p className="text-sm mt-1">Guests: 2</p>
                  <p className="text-sm font-semibold mt-1">
                    Total: ${room.pricePerNight}
                  </p>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between text-sm">
                <div className="mb-4">
                  <p>
                    <strong>Check-In:</strong> {formatDate(checkIn)}
                  </p>
                  <p>
                    <strong>Check-Out:</strong> {formatDate(checkOut)}
                  </p>
                </div>
                <div>
                  <span className="text-green-600 font-semibold">Paid</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
