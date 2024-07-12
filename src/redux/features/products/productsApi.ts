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
                console.log(data);
                
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
    useGetAllProductsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;
