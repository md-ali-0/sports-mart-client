import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSingleProduct: builder.query({
            query: (id) => {
                return {
                    url: `/product/${id}`,
                };
            },
            providesTags: ["products"],
        }),
        getAllProducts: builder.query({
            query: (query) => {
                return {
                    url: "/product",
                    params: query
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
                    url: `/product/${data.id}`,
                    method: "PUT",
                    body: data.data,
                };
            },
            invalidatesTags: ["products"],
        }),
        deleteProduct: builder.mutation({
            query: (id) => {
                return {
                    url: `/product/${id}`,
                    method: "DELETE"
                };
            },
            invalidatesTags: ["products"],
        }),
    }),
});

export const {
    useGetSingleProductQuery,
    useGetAllProductsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;
