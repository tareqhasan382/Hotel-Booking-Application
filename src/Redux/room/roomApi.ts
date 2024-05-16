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
interface UpdateAvailabilityArgs {
  data: { startDate: string; endDate: string };
  id: string;
}
export const roomApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchHotels: build.query({
      query: (data) => ({
        url: "/hotels",
        method: "GET",
        params: data,
      }),
      providesTags: ["hotel"],
    }),
    // router.get("/singleRoom/:id", RoomController.getSingleRoomData);
    getRoom: build.query({
      query: (id) => ({
        url: `/singleRoom/${id}`,
        method: "GET",
      }),
      providesTags: ["hotel"],
    }),
    // router.patch("/availability/:id", patch
    updateAvailability: build.mutation<void, UpdateAvailabilityArgs>({
      query: ({ data, id }) => ({
        url: `/availability/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    Hotels: build.query({
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
  useUpdateAvailabilityMutation,
} = roomApi;
