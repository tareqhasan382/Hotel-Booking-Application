import baseApi from "../api/baseApi";
interface Room {
  _id: string;
  roomNumber: number;
  title: string;
  desc: string;
  bedCount: number;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface Order {
  _id: string;
  hotel: string;
  checkInDate: Date;
  checkOutDate: Date;
  totalPrice: number;
  room: Room;
  user: User;
  status: string;
}

interface MyOrdersResponse {
  status: boolean;
  message: string;
  data: Order[];
}
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    booking: build.mutation({
      query: (data) => ({
        url: "/create-booking",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),
    myOrders: build.query<MyOrdersResponse, void>({
      query: () => "/myBookings",
      providesTags: ["orders"],
    }),
  }),
});

export const { useBookingMutation, useMyOrdersQuery } = bookingApi;
