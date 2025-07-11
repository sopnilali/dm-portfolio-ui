
import { baseApi } from "../../api/baseApi";

const testimonialsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTestimonials: builder.query({
            query: () => ({
                url: '/client-says',
                method: 'GET'
            }),
            providesTags: ['testimonials']
        }),
    })
});

export const {
    useGetAllTestimonialsQuery,
} = testimonialsApi;