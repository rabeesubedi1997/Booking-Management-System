// src/types/index.ts

export interface Booking {
  bid: string;
  btype: string;
  cusid: string;
  customerSatus: string;
  bdate: string;
  btime: string;
  comments: string;
  address: string;
  suburb: string;
  postcode: string;
  stateID: string;
  bdetail: BookingDetail[];
}

export interface BookingDetail {
  pid: string;
  servid: string;
  servprice: string;
}