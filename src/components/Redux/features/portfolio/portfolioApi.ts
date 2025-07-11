
import { baseApi } from "../../api/baseApi";

const portfolioApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllPortfolio: builder.query({
            query: () => ({
                url: '/portfolio',
                method: 'GET'
            }),
            providesTags: ['portfolio']
        }),
    })
});

export const {
    useGetAllPortfolioQuery,
} = portfolioApi;