import { baseApi } from "../api/baseApi";
import { userLoggedIn } from "./authSlice";
import { jwtDecode } from "jwt-decode";
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/registration",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("signup:", result.data.data);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.data,
              user: result.data.data,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/signin",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log("queryFulfilled result:",result.data.token)
          const user = jwtDecode(result?.data?.token);
          // console.log("user token:",user)
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.token,
              user: user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.token,
              user: user,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
