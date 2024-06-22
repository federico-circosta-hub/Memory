import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const scoreApi = createApi({
  reducerPath: "publicScore",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://easy-memory-server.onrender.com/api/",
  }),
  tagTypes: ["score"],
  endpoints: (builder) => ({
    wakeUpServer: builder.query({
      query: () => "wakeUpServer",
    }),
    getScore: builder.query({
      query: () => "get/score",
      providesTags: ["score"],
    }),

    postScore: builder.mutation({
      query: (data) => ({
        url: "post/score",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["score"],
    }),
  }),
});

export const { useWakeUpServerQuery, useGetScoreQuery, usePostScoreMutation } =
  scoreApi;
