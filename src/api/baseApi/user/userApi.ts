import { baseApi } from "@/api/baseApi/baseApi";
import { API_ROUTES } from "../apiRoutes";
import type { ILegislationProject } from "@/api/baseApi/legislation/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserWatchList: builder.query<ILegislationProject[], { userId: string }>({
      query: ({ userId }) => API_ROUTES.WATCH_LIST(userId),
    }),
    addProjectToUserWatchList: builder.mutation<
      ILegislationProject,
      { userId: string; projectId: string }
    >({
      query: ({ userId, projectId }) => ({
        url: API_ROUTES.WATCH_LIST(userId),
        method: "POST",
        body: { projectId },
      }),
    }),
    removeProjectFromUserWatchList: builder.mutation<
      void,
      { userId: string; projectId: string }
    >({
      query: ({ userId, projectId }) => ({
        url: `${API_ROUTES.WATCH_LIST(userId)}`,
        method: "DELETE",
        body: { projectId },
      }),
    }),
  }),
});

export const {
  useGetUserWatchListQuery,
  useAddProjectToUserWatchListMutation,
} = userApi;
