import { createSlice } from "@reduxjs/toolkit";
import { gameSize } from "../utils/functions/setGameSize";
const gameSlice = createSlice({
  name: "game",
  initialState: {
    difficulty: { level: "easy", row: 3, col: 4 },
    score: 0,
  },
  reducers: {
    newGame: (state) => {
      state.score = 0;
    },
    changeDifficulty: (state, param) => {
      const { payload } = param;
      state.difficulty = gameSize(payload);
      state.score = 0;
    },
    increaseScoreGuessedCards: (state) => {
      state.score = state.score + 100;
    },
    decreaseScore: (state) => {
      state.score = state.score - 25;
    },
  },
});
const { actions, reducer } = gameSlice;
export const {
  changeDifficulty,
  increaseScoreGuessedCards,
  decreaseScore,
  newGame,
} = actions;
export default reducer;
