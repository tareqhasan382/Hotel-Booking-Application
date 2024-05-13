import { baseApi } from "./api/baseApi";
import authSlice from "./auth/authSlice";
import hotelSlice from "./hotel/hotelSlice";
// import jobModelSlice from "./jobs/jobModelSlice";
export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authSlice,
  hotel: hotelSlice,
  //   jobModel:jobModelSlice
};
