export const API_ROUTES = {
  HEALTH_CHECK: "/health-check",
  LOGIN: "/auth/login",
  LEGISLATION: "/legislation",
  WATCH_LIST: (userId: string) => `/user/${userId}/watch`,
};
