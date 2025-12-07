import { baseApi } from "@/api/baseApi/baseApi";
import type { ILegislationProject } from "./types";
import { API_ROUTES } from "../apiRoutes";

export const legislationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLegislationList: builder.query<ILegislationProject[], void>({
      query: () => API_ROUTES.LEGISLATION,
    }),
    getLegislation: builder.query<ILegislationProject, string>({
      query: (id: string) => `${API_ROUTES.LEGISLATION}/${id}`,
    }),
  }),
});

export const { useGetLegislationListQuery, useGetLegislationQuery } =
  legislationApi;
