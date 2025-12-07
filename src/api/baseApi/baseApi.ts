import { config } from "@/config/config";
import type { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "./apiRoutes";

const baseQuery = fetchBaseQuery({
  baseUrl: config.BACKEND_URL,
  prepareHeaders: (headers, { getState }) => {
    const session = (getState() as RootState).session;
    if (session.accessToken) {
      headers.set("Authorization", `Bearer ${session.accessToken}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["self", "watch-list", "comments"],
  endpoints: (builder) => ({
    healthCheck: builder.query<{ status: string }, void>({
      query: () => API_ROUTES.HEALTH_CHECK,
    }),
  }),
});

export const { useHealthCheckQuery } = baseApi;
