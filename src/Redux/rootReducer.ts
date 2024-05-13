import { baseApi } from "./api/baseApi";
import authSlice from "./auth/authSlice";

// import jobModelSlice from "./jobs/jobModelSlice";
export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authSlice,

  //   jobModel:jobModelSlice
};
