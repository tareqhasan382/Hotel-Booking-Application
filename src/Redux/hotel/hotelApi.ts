import baseApi from "../api/baseApi";
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
export const prroductApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchHotels: build.query<Hotel[], void>({
      query: () => ({
        url: "hotels",
        method: "GET",
      }),
      providesTags: ["hotel"],
    }),
  }),
});

export const { useFetchHotelsQuery } = prroductApi;
