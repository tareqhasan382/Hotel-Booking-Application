/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState: INITIAL_STATE,
  reducers: {
    newSearch: (_state, action) => action.payload,
    resetSearch: () => INITIAL_STATE,
  },
});

export const { newSearch, resetSearch } = searchSlice.actions;

export const selectSearch = (state: any) => state.search;

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});
