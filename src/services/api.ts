import axios from 'axios';
import { Booking } from '../types';

const API_URL = 'https://api.example.com/cancelled-bookings'; // Replace with the actual API endpoint

export const fetchCancelledBookings = async (): Promise<Booking[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching cancelled bookings:', error);
        throw error;
    }
};