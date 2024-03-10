export const gameSize = (s) => {
  switch (s) {
    case "easy":
      return { level: "easy", row: 3, col: 4 };
    case "medium":
      return { level: "medium", row: 4, col: 5 };
    default:
      return { level: "hard", row: 4, col: 7 };
  }
};
