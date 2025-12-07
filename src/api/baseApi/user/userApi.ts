import { baseApi } from "@/api/baseApi/baseApi";
import { API_ROUTES } from "../apiRoutes";
import type { ILegislationProject } from "@/api/baseApi/legislation/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserWatchProcesses: builder.query<ILegislationProject[], void>({
      query: () => API_ROUTES.MY_WATCH_LIST,
    }),
    addProjectToUserWatchList: builder.mutation<
      ILegislationProject,
      { projectId: string }
    >({
      query: ({ projectId }) => ({
        url: API_ROUTES.MY_WATCH_LIST,
        method: "POST",
        body: { projectId },
      }),
    }),
    removeProjectFromUserWatchList: builder.mutation<
      void,
      { projectId: string }
    >({
      query: ({ projectId }) => ({
        url: `${API_ROUTES.MY_WATCH_LIST}`,
        method: "DELETE",
        body: { projectId },
      }),
    }),
  }),
});

export const {
  useGetUserWatchProcessesQuery,

  useAddProjectToUserWatchListMutation,
  useRemoveProjectFromUserWatchListMutation,
} = userApi;
