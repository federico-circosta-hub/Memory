import React, { useState, useEffect } from "react";
import { GameCard } from "./GameCard";
import { animals } from "../animals/animals";
import { getGameDeck } from "../utils/functions/setGameDeck";
import { CircularProgress } from "@mui/material";
import { WinModal } from "./WinModal";
import { useSelector } from "react-redux";

export const Game = () => {
  const [AACardsContent, setAACardsContent] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [blocking, setBlocking] = useState(false);
  const [guessedCards, setGuessedCards] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [reload, setReload] = useState(0);

  const { row, col } = useSelector((state) => state.difficulty);

  const restart = () => {
    setSelectedCards([]);
    setGuessedCards([]);
    setCompleted(false);
    setReload((prevState) => prevState + 1);
  };

  useEffect(() => {
    const shuffledAnimals = animals.sort(() => Math.random() - 0.5);
    const gameDeck = getGameDeck(shuffledAnimals, row, col);
    let cardsContent = [];
    let r = [];
    let deckIndex = 0;
    for (let i = 0; i < row; i++) {
      for (let ii = 0; ii < col; ii++) {
        r.push({
          animal: gameDeck[deckIndex],
          id: deckIndex,
        });
        deckIndex++;
      }
      cardsContent.push(r);
      r = [];
    }
    setAACardsContent(cardsContent);
  }, [reload, col, row]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setBlocking(true);
      setTimeout(() => {
        setSelectedCards([]);
        setBlocking(false);
      }, 1500);
      if (selectedCards[0].animal.name === selectedCards[1].animal.name) {
        setGuessedCards((prevState) => [
          ...prevState,
          selectedCards[0].id,
          selectedCards[1].id,
        ]);
      }
    }
  }, [selectedCards]);

  useEffect(() => {
    if (guessedCards.length === row * col) setCompleted(true);
  }, [guessedCards, row, col]);

  return AACardsContent.length === 0 ? (
    <CircularProgress />
  ) : (
    <div className="flex flex-col w-full justify-center items-center">
      {AACardsContent.map((e) => (
        <div className="flex flex-row">
          {e.map((c) => (
            <GameCard
              blocking={blocking}
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
