import React from 'react';
import BookingItem from './BookingItem';
import useBookings from '../hooks/useBookings';
import type { Booking } from '../types';

const sampleData: Booking[] = [
  {
    bid: "2493467",
    btype: "cancelled",
    cusid: "231241",
    customerSatus: "archive",
    bdate: "2026-12-29",
    btime: "11:00",
    comments: "",
    address: "123 Sample St",
    suburb: "test",
    postcode: "456",
    stateID: "7",
    bdetail: [
      {
        pid: "306082",
        servid: "16",
        servprice: "40.00"
      }
    ]
  }
];

const BookingList: React.FC = () => {
    const { bookings = sampleData, loading, error } = useBookings();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                Error fetching bookings: {error}
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Cancelled Bookings</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {bookings.map(booking => (
                    <BookingItem key={booking.bid} booking={booking} />
                ))}
            </div>
        </div>
    );
};

export default BookingList;