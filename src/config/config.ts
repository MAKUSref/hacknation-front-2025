export const config = {
  BACKEND_URL:
    (import.meta.env.VITE_BACKEND_URL as string) || "/api",
  STRAPI_URL:
    (import.meta.env.VITE_STRAPI_URL as string) || "/strapi",
  STRAPI_ON: import.meta.env.VITE_STRAPI_ON || "false",
};
