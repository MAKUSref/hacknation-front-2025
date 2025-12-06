import { config } from "@/config/config";
import type { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { STRAPI_ROUTES } from "./strapiRoutes";
import type { StrapiResponse } from "./types";

const baseQuery = fetchBaseQuery({
  baseUrl: config.STRAPI_URL,
  prepareHeaders: (headers, { getState }) => {
    const session = (getState() as RootState).session;
    if (session.accessToken) {
      headers.set("Authorization", `Bearer ${session.accessToken}`);
    }
    return headers;
  },
});

export const strapiApi = createApi({
  reducerPath: "strapiApi",
  baseQuery,
  tagTypes: ["articles"],
  endpoints: (builder) => ({
    strapiHealthCheck: builder.query<StrapiResponse<{ message: string }>, void>({
      query: () => STRAPI_ROUTES.HEALTH_CHECK,
    }),
  }),
});

export const { useLazyStrapiHealthCheckQuery } = strapiApi;
