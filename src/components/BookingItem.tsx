import React from 'react';
import { Booking } from '../types';

interface BookingItemProps {
    booking: Booking;
}

const BookingItem: React.FC<BookingItemProps> = ({ booking }) => {
    return (
        <div className="booking-item">
            <h3>Booking ID: {booking.bid}</h3>
            <p>Type: {booking.btype}</p>
            <p>Customer ID: {booking.cusid}</p>
            <p>Date: {booking.bdate}</p>
            <p>Time: {booking.btime}</p>
            <p>Details: {booking.bdetail}</p>
        </div>
    );
};

export default BookingItem;