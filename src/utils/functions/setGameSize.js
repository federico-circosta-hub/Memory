export const gameSize = (s) => {
  switch (s) {
    case "easy":
      return { level: "easy", row: 2, col: 3 };
    case "medium":
      return { level: "medium", row: 3, col: 4 };
    default:
      return { level: "hard", row: 3, col: 6 };
  }
};
