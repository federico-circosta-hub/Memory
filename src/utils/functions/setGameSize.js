export const rows = (s) => {
  switch (s) {
    case "easy":
      return 2;
    default:
      return 3;
    case "hard":
      return 4;
  }
};

export const columns = (s) => {
  switch (s) {
    case "easy":
      return 3;
    default:
      return 4;
    case "hard":
      return 4;
  }
};
