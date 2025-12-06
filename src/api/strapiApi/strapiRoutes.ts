export const STRAPI_ROUTES = {
  HEALTH_CHECK: "/health-check",
  ARTICLES: {
    ALL: "/articles",
    SINGLE: (id: string) => `/articles/${id}`,
  }
}