import { Booking } from '../types';

const mockBookings: { data: Booking[] } = {
  data: [
    {
      bid: "2493467",
      btype: "cancelled",
      cusid: "231241",
      customerSatus: "archive",
      bdate: "2026-12-29",
      btime: "11:00",
      comments: "Cancelled by customer",
      address: "123 Main Street",
      suburb: "Downtown",
      postcode: "2000",
      stateID: "7",
      bdetail: [{ pid: "306082", servid: "16", servprice: "40.00" }]
    },
    {
      bid: "2493468",
      btype: "cancelled",
      cusid: "231242",
      customerSatus: "archive",
      bdate: "2026-12-30",
      btime: "14:00",
      comments: "Service unavailable",
      address: "456 Park Avenue",
      suburb: "Uptown",
      postcode: "2001",
      stateID: "7",
      bdetail: [{ pid: "306083", servid: "17", servprice: "55.00" }]
    }
  ]
};

export const fetchCancelledBookings = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate 10% chance of error
  if (Math.random() < 0.1) {
    throw new Error('Failed to fetch bookings');
  }
  
  return mockBookings;
};