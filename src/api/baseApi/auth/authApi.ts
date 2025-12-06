import { baseApi } from "@/api/baseApi/baseApi";
import type { LoginResponse } from "./types";
import { API_ROUTES } from "../apiRoutes";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, { email: string; password: string }>(
      {
        query: (data) => ({
          url: API_ROUTES.LOGIN,
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["self"],
      }
    ),
  }),
});

export const { useLoginMutation } = authApi;
