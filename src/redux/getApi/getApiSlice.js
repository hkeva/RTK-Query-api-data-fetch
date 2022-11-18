import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const getApiData = createApi({
  reducerPath: "getApiData", //by default its 'api'
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts",
    }),
  }),
})

export const { useGetAllPostsQuery } = getApiData
