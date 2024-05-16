import baseApi from "../api/baseApi";
export interface Room {
  _id: string;
  roomNumber: number;
  title: string;
  desc: string;
  bedCount: number;
  guestCount: number;
  bathroomCount: number;
  image: string[];
  breakFastPrice: number;
  price: number;
  roomService: boolean;
  TV: boolean;
  balcony: boolean;
  freeWifi: boolean;
  airCondition: boolean;
  soundProofed: boolean;
  unavailableDates: string[];
  hotel: string;
}
export interface Hotel {
  _id: string;
  name: string;
  type: string;
  title: string;
  desc: string;
  city: string;
  address: string;
  distance: string;
  gym: boolean;
  photos: string[];
  rating?: number;
  cheapestPrice: number;
  featured?: boolean;
  rooms?: Room[];
}

export interface IHotelResponse {
  status: boolean;
  message: string;
  data: Hotel[];
}

interface QueryParams {
  limit?: number;
  featured?: boolean;
}
export interface CountByCity {
  type: string;
  count: number;
}
[];

type CountByCityResponse = number[];
type CityQueryData = string[];
interface Property {
  type: string;
  count: number;
}
type PropertyArray = Property[];
export const hotelApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchHotels: build.query<IHotelResponse, QueryParams>({
      query: (data) => ({
        url: "/hotels",
        method: "GET",
        params: data,
      }),
      providesTags: ["hotel"],
    }),
    //router.get("/room/:id", HotelController.getHotelRooms); || /hotel/room/:id
    HotelRooms: build.query({
      query: (id) => ({
        url: `/hotel/room/${id}`,
        method: "GET",
      }),
      providesTags: ["hotel"],
    }),
    Hotels: build.query<IHotelResponse, QueryParams>({
      query: (data) => ({
        url: "/hotels",
        method: "GET",
        params: data,
      }),
      providesTags: ["hotel"],
    }),
    fetchCountByCity: build.query<CountByCityResponse, CityQueryData>({
      query: (cities) => ({
        url: "/countByCity",
        method: "GET",
        params: { cities },
      }),
      providesTags: ["hotel"],
    }),
    fetchCountByType: build.query<PropertyArray, void>({
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
  useHotelRoomsQuery,
} = hotelApi;
