import { baseApi } from "@/api/baseApi/baseApi";
import { API_ROUTES } from "../apiRoutes";
import type { ILegislationProject } from "@/api/baseApi/legislation/types";

export const meApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyWatchProcesses: builder.query<ILegislationProject[], void>({
      query: () => API_ROUTES.MY_WATCH_LIST,
      providesTags: ["watch-list"],
    }),
    addProjectToMyWatchList: builder.mutation<
      ILegislationProject,
      { projectId: string }
    >({
      query: ({ projectId }) => ({
        url: API_ROUTES.MY_WATCH_LIST,
        method: "POST",
        body: { projectId },
      }),
      invalidatesTags: ["watch-list"],
    }),
    removeProjectFromMyWatchList: builder.mutation<void, { projectId: string }>(
      {
        query: ({ projectId }) => ({
          url: `${API_ROUTES.MY_WATCH_LIST}`,
          method: "DELETE",
          body: { projectId },
        }),
        invalidatesTags: ["watch-list"],
      }
    ),
  }),
});

export const {
  useGetMyWatchProcessesQuery,
  useAddProjectToMyWatchListMutation,
  useRemoveProjectFromMyWatchListMutation,
} = meApi;
