/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchHotels } from "../../utils/api";
// import { fetchHotels } from "../utils/api";

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
    fetchHotelsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchHotelsSuccess: (state, action: PayloadAction<Hotel[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchHotelsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
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
    // New actions for modifying hotel properties
    updateHotelName: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      const index = state.data.findIndex(
        (hotel) => hotel.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index].name = action.payload.name;
      }
    },
    updateHotelLocation: (
      state,
      action: PayloadAction<{ id: number; location: string }>
    ) => {
      const index = state.data.findIndex(
        (hotel) => hotel.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index].location = action.payload.location;
      }
    },
    // Add more actions for updating other hotel properties as needed
  },
});

export const {
  fetchHotelsStart,
  fetchHotelsSuccess,
  fetchHotelsFailure,
  addHotel,
  updateHotel,
  deleteHotel,
  updateHotelName,
  updateHotelLocation,
} = hotelSlice.actions;

export default hotelSlice.reducer;

// export const fetchHotelsAsync = () => async (dispatch: any) => {
//   try {
//     dispatch(fetchHotelsStart());
//     const hotelsData = await fetchHotels();
//     dispatch(fetchHotelsSuccess(hotelsData));
//   } catch (error: any) {
//     dispatch(fetchHotelsFailure(error.message));
//   }
// };
export const fetchHotelsAsync = createAsyncThunk<Hotel[]>(
  "hotel/fetchHotels",
  async () => {
    try {
      const hotelsData: Hotel[] = fetchHotels();
      return hotelsData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);
