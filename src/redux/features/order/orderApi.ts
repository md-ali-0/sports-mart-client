import { baseApi } from "../../api/baseApi";

const ordersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSingleOrder: builder.query({
            query: (id) => {
                return {
                    url: `/order/${id}`,
                };
            },
            providesTags: ["orders"],
        }),
        getAllOrders: builder.query({
            query: (query) => {
                return {
                    url: "/order",
                    params: query,
                };
            },
            providesTags: ["orders"],
        }),
        createOrder: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: "/order",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["orders"],
        }),
        updateOrder: builder.mutation({
            query: (data) => {
                return {
                    url: `/order/${data.id}`,
                    method: "PUT",
                    body: data.data,
                };
            },
            invalidatesTags: ["orders"],
        }),
        deleteOrder: builder.mutation({
            query: (id) => {
                return {
                    url: `/order/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["orders"],
        }),
    }),
});

export const {
    useGetAllOrdersQuery,
    useGetSingleOrderQuery,
    useCreateOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
} = ordersApi;
