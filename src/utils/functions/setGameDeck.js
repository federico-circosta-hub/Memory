export const getGameDeck = (shuffledAnimals, rows, col) => {
  let deck = [];
  let index = 0;
  while (deck.length < rows * col) {
    deck.push(shuffledAnimals[index]);
    deck.push(shuffledAnimals[index]);
    index++;
  }
  return deck.sort(() => Math.random() - 0.5);
};
