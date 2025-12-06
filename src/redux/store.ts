import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./session/sessionSlice";
import { preloadSession, sessionListenerMiddleware } from "./middleware";
import { baseApi } from "@/api/baseApi/baseApi";
import { strapiApi } from "@/api/strapiApi/strapiApi";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [strapiApi.reducerPath]: strapiApi.reducer,
  },
  preloadedState: {
    session: preloadSession(),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sessionListenerMiddleware.middleware,
      baseApi.middleware,
      strapiApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
