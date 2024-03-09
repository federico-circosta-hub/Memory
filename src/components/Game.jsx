import React, { useState, useEffect } from "react";
import { GameCard } from "./GameCard";
import { animals } from "../animals/animals";
import { getGameDeck } from "../utils/functions/setGameDeck";
import { CircularProgress } from "@mui/material";
import { WinModal } from "./WinModal";

export const Game = ({ rows, col }) => {
  const [AACardsContent, setAACardsContent] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [guessedCards, setGuessedCards] = useState([]);
  const [completed, setCompleted] = useState(true);
  const [reload, setReload] = useState(0);

  const restart = () => {
    setCompleted(false);
    setReload((prevState) => prevState + 1);
  };

  useEffect(() => {
    const shuffledAnimals = animals.sort(() => Math.random() - 0.5);
    const gameDeck = getGameDeck(shuffledAnimals, rows, col);
    let cardsContent = [];
    let row = [];
    let deckIndex = 0;
    for (let i = 0; i < rows; i++) {
      for (let ii = 0; ii < col; ii++) {
        row.push({
          animal: gameDeck[deckIndex],
          id: deckIndex,
        });
        deckIndex++;
      }
      cardsContent.push(row);
      row = [];
    }
    setAACardsContent(cardsContent);
  }, [reload, col, rows]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => {
        setSelectedCards([]);
      }, 1500);
      selectedCards[0].animal.name === selectedCards[1].animal.name &&
        setGuessedCards((prevState) => [
          ...prevState,
          selectedCards[0].id,
          selectedCards[1].id,
        ]);
    }
    if (guessedCards === rows * col) setCompleted(true);
  }, [selectedCards, col, rows, guessedCards]);

  return AACardsContent.length === 0 ? (
    <CircularProgress />
  ) : (
    <div className="flex flex-col w-full justify-center items-center">
      {AACardsContent.map((e) => (
        <div className="flex flex-row">
          {e.map((c) => (
            <GameCard
              animal={c.animal}
              id={c.id}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              guessedCards={guessedCards}
            />
          ))}
        </div>
      ))}
      {completed && <WinModal open={completed} restart={restart} />}
    </div>
  );
};
