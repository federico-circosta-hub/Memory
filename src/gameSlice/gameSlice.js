import { createSlice } from "@reduxjs/toolkit";
import { gameSize } from "../utils/functions/setGameSize";
const gameSlice = createSlice({
  name: "game",
  initialState: {
    difficulty: { level: "easy", row: 3, col: 4 },
    score: 0,
  },
  reducers: {
    changeDifficulty: (state, param) => {
      const { payload } = param;
      state.difficulty = gameSize(payload);
      state.score = 0;
    },
  },
});
const { actions, reducer } = gameSlice;
export const { changeDifficulty } = actions;
export default reducer;
