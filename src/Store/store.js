import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../gameSlice/gameSlice";
import { scoreApi } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    [scoreApi.reducerPath]: scoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scoreApi.middleware),
});
