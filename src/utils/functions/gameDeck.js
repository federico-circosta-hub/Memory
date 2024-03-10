import { animals } from "../../animals/animals";

export const getGameDeck = (shuffledAnimals, rows, cols) => {
  let deck = [];
  let index = 0;
  while (deck.length < rows * cols) {
    deck.push(shuffledAnimals[index]);
    deck.push(shuffledAnimals[index]);
    index++;
  }
  return deck.sort(() => Math.random() - 0.5);
};

export const getGameGrid = (rowsN, colsN) => {
  const shuffledAnimals = animals.sort(() => Math.random() - 0.5);
  const gameDeck = getGameDeck(shuffledAnimals, rowsN, colsN);
  let gameGrid = [];
  let line = [];
  let deckIndex = 0;
  for (let i = 0; i < rowsN; i++) {
    for (let ii = 0; ii < colsN; ii++) {
      line.push({
        animal: gameDeck[deckIndex],
        id: deckIndex,
      });
      deckIndex++;
    }
    gameGrid.push(line);
    line = [];
  }
  return gameGrid;
};
