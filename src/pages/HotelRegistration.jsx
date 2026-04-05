import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBookings } from '../context/BookingContext';
import toast, { Toaster } from 'react-hot-toast';

export const HotelRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addBooking } = useBookings();

  const { room, checkIn, checkOut } = location.state || {};

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could validate and process payment
    // For demo, just add to bookings
    addBooking({ room, checkIn, checkOut, ...formData });
    toast.success('Booking confirmed!');
    navigate('/my-bookings');
  };

  if (!room) {
    return (
      <div className="py-28 text-center">
        <p className="text-gray-500">No booking data found. Please go back and try again.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 md:px-16 lg:px-24">
      <h1 className="text-3xl font-semibold mb-6">Complete Your Booking</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-medium mb-4">Booking Details</h2>
        <p><strong>Hotel:</strong> {room.hotel.name}</p>
        <p><strong>Room:</strong> {room.roomType}</p>
        <p><strong>Check-In:</strong> {checkIn}</p>
        <p><strong>Check-Out:</strong> {checkOut}</p>
        <p><strong>Price:</strong> ${room.pricePerNight}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <h2 className="text-xl font-medium">Payment Information</h2>
        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Billing Address</label>
          <textarea
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Confirm Booking
        </button>
      </form>
      <Toaster />
    </div>
  );
};
