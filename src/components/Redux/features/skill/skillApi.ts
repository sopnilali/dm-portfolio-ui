
import { baseApi } from "../../api/baseApi";

const skillApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSkills: builder.query({
            query: () => ({
                url: '/skills',
                method: 'GET'
            }),
            providesTags: ['skill']
        }),
    })
});

export const {
    useGetAllSkillsQuery,
} = skillApi;