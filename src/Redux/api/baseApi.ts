import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import data from "../../data.json"
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
      const authString = localStorage.getItem("auth");
      const auth = authString ? JSON.parse(authString) : null;
      const token = auth ? auth.accessToken : null;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["auth", "hotel", "room"],
});

export default baseApi;
