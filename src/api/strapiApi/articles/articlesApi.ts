import { strapiApi } from "../strapiApi";
import { STRAPI_ROUTES } from "../strapiRoutes";
import type { StrapiResponse } from "../types";

export const articlesApi = strapiApi.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<StrapiResponse<unknown[]>, void>({
      query: () => ({
        url: STRAPI_ROUTES.ARTICLES.ALL,
        method: "GET",
        params: {
          populate: "*",
        },
      }),
      providesTags: ["articles"],
    }),

    getArticle: build.query<StrapiResponse<unknown>, { id: string }>({
      query: ({ id }) => ({
        url: STRAPI_ROUTES.ARTICLES.SINGLE(id),
        method: "GET",
        params: {
          populate: "*",
        },
      }),
      providesTags: ["articles"],
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleQuery } = articlesApi;
