import { baseApi } from "../../api/baseApi";


const experienceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllExperience: builder.query({
            query: () => ({
                url: '/work-experience',
                method: 'GET'
            }),
            providesTags: ['experience']
        }),
    })
});

export const {
    useGetAllExperienceQuery,
} = experienceApi;
    