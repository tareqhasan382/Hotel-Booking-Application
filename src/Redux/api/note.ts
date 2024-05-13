// /* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";
// /auth/login
export const prroductApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProduct: build.mutation({
      query: (data) => ({
        url: "/api/v1/addProduct",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["hotel"],
    }),
    products: build.query({
      query: (arg: Record<string, string>) => ({
        url: "/api/v1/product",
        method: "GET",
        params: arg,
      }),
      providesTags: ["hotel"],
    }),
    //==================== product
    product: build.query<void, string>({
      query: (id) => ({
        url: `/api/v1/product/${id}`,
        method: "GET",
      }),
    }),
    deleteProduct: build.mutation<void, string>({
      query: (id) => ({
        url: `/api/v1/editProfile/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useProductsQuery,
  useDeleteProductMutation,
  useProductQuery,
} = prroductApi;
