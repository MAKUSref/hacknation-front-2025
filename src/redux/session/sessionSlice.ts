import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SessionState } from "./types";

const initialState: SessionState = {
  accessToken: undefined,
  selectedFields: [],
};

export const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = undefined;
      state.selectedFields = [];
    },
    setSelectedFields: (state, action: PayloadAction<string[]>) => {
      state.selectedFields = action.payload;
    },
  },
});

export const { setAccessToken, logout, setSelectedFields } =
  sessionSlice.actions;
export default sessionSlice.reducer;
