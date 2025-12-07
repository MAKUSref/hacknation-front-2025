import { baseApi } from "@/api/baseApi/baseApi";
import type { ILegislationProject, ILegislationStepsInfo } from "./types";
import { API_ROUTES } from "../apiRoutes";
import dayjs from "dayjs";

export const legislationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLegislationList: builder.query<ILegislationProject[], void>({
      query: () => API_ROUTES.LEGISLATION,
      transformResponse: (response: ILegislationProject[]) => {
        return response?.sort((a, b) =>
          //FIX: NOT WORKING
          dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1
        );
      },
    }),
    getLegislation: builder.query<ILegislationProject, string>({
      query: (id: string) => `${API_ROUTES.LEGISLATION}/${id}`,
    }),
    getLegislationSteps: builder.query<ILegislationStepsInfo[], void>({
      query: () => `${API_ROUTES.STEPS}`,
    }),
    getWatchedLegislationList: builder.query<ILegislationProject[], void>({
      query: () => API_ROUTES.MY_WATCH_LIST,
    }),
    getCommentsList: builder.query<
      { userId: { _id: string } }[],
      { projectId: string }
    >({
      query: ({ projectId }) => `${API_ROUTES.COMMENTS}/project/${projectId}`,
      providesTags: ["comments"],
    }),
    addComment: builder.mutation<
      void,
      { projectId: string; userId: string; content: string }
    >({
      query: (data) => ({
        url: API_ROUTES.COMMENTS,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const {
  useGetLegislationListQuery,
  useGetLegislationQuery,
  useGetLegislationStepsQuery,
  useGetWatchedLegislationListQuery,
  useGetCommentsListQuery,
  useAddCommentMutation,
} = legislationApi;
