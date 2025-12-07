import { baseApi } from "@/api/baseApi/baseApi";
import { API_ROUTES } from "../apiRoutes";

export const meApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    makeQuery: builder.mutation<
      {text: string},
      { legislationProjectId: string, prompt: string }
    >({
      query: ({ legislationProjectId, prompt }) => ({
        url: API_ROUTES.AI,
        method: "POST",
        body: { legislationProjectId, prompt },
      }),
      invalidatesTags: ["watch-list"],
    }),
  }),
});

export const {
  useMakeQueryMutation,
} = meApi;
