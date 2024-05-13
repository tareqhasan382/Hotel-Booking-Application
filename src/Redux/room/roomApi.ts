/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../api/baseApi";
export interface Hotel {
  id: number;
  name: string;
  location: string;
  rooms: {
    id: number;
    type: string;
    price: number;
  }[];
}

export const roomApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchHotels: build.query<any, any>({
      query: (data) => ({
        url: "/hotels",
        method: "GET",
        params: data,
      }),
      providesTags: ["hotel"],
    }),
    // router.get("/singleRoom/:id", RoomController.getSingleRoomData);
    getRoom: build.query<any, any>({
      query: (id) => ({
        url: `/singleRoom/${id}`,
        method: "GET",
      }),
      providesTags: ["hotel"],
    }),
    Hotels: build.query<any, any>({
      query: (data) => ({
        url: "/hotels",
        method: "GET",
        params: data,
      }),
      providesTags: ["hotel"],
    }),
    fetchCountByCity: build.query({
      query: (cities) => ({
        url: "/countByCity",
        method: "GET",
        params: { cities },
      }),
      providesTags: ["hotel"],
    }),
    fetchCountByType: build.query({
      query: () => ({
        url: "/countByType",
        method: "GET",
        // params: args,
      }),
      providesTags: ["hotel"],
    }),
    hotel: build.query({
      query: (id) => ({
        url: `/hotel/${id}`,
        method: "GET",
      }),
      providesTags: ["hotel"],
    }),
  }),
});

export const {
  useFetchHotelsQuery,
  useFetchCountByCityQuery,
  useFetchCountByTypeQuery,
  useHotelQuery,
  useHotelsQuery,
  useGetRoomQuery,
} = roomApi;
