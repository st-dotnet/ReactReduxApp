import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fakeBaseUrl = "https://jsonplaceholder.typicode.com/";
const fakeEndpoint = "posts";

// const locaBaselUrl = "https://localhost:44368/";
// const localEndpoint ="api/employee/record";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: fakeBaseUrl,
  }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => ({
        url: fakeEndpoint,
        method: "GET",
      }),
    }),
    getDataById: builder.query({
      query: (id) => ({
        url: `${fakeEndpoint}/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllDataQuery, useGetDataByIdQuery } = employeeApi;
