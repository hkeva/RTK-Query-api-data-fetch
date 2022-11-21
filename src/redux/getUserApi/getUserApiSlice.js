import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const getUserApiData = createApi({
  reducerPath: "getUserApiData", //by default its 'api'
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
    }),
  }),
})

export const { useGetAllUsersQuery } = getUserApiData
