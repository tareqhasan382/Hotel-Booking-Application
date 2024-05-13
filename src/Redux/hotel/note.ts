import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Hotel {
  id: number;
  name: string;
  location: string;
  rooms: {
    id: number;
    type: string;
    price: number;
  }[];
}

interface HotelState {
  data: Hotel[];
  loading: boolean;
  error: string | null;
}

const initialState: HotelState = {
  data: [],
  loading: false,
  error: null,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    hotels: (state, action: PayloadAction<Hotel[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    addHotel: (state, action: PayloadAction<Hotel>) => {
      state.data.push(action.payload);
    },
    updateHotel: (state, action: PayloadAction<Hotel>) => {
      const index = state.data.findIndex(
        (hotel) => hotel.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteHotel: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((hotel) => hotel.id !== action.payload);
    },
  },
});

export default hotelSlice.reducer;
export const { hotels, addHotel, updateHotel, deleteHotel } =
  hotelSlice.actions;
