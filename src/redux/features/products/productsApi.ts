import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => {
                return {
                    url: "/product",
                };
            },
            providesTags: ["products"],
        }),
        createProduct: builder.mutation({
            
            query: (data) => {
                console.log(data);
                return {
                    url: "/product",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["products"],
        }),
        updateProduct: builder.mutation({
            query: (data) => {
                return {
                    url: "/product",
                    method: "PUT",
                    body: data,
                };
            },
            invalidatesTags: ["products"],
        }),
        deleteProduct: builder.mutation({
            query: (data) => {
                return {
                    url: "/product",
                    method: "DELETE",
                    body: data,
                };
            },
            invalidatesTags: ["products"],
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;
