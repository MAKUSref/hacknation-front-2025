import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SessionState } from "./types";

const initialState: SessionState = {};

export const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = undefined;
    },
  },
});

export const { setAccessToken, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
