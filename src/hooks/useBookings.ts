import { useState, useEffect } from 'react';
import { fetchCancelledBookings } from '../services/mockApi';
import type { Booking } from '../types';

const useBookings = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getBookings = async () => {
            try {
                const response = await fetchCancelledBookings();
                setBookings(response.data);
                localStorage.setItem('cancelledBookings', JSON.stringify(response.data));
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred while fetching bookings');
            } finally {
                setLoading(false);
            }
        };

        const storedBookings = localStorage.getItem('cancelledBookings');
        if (storedBookings) {
            setBookings(JSON.parse(storedBookings));
            setLoading(false);
        } else {
            getBookings();
        }
    }, []);

    return { bookings, loading, error };
};

export default useBookings;