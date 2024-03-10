import React, { useState, useEffect } from "react";
import { GameCard } from "./GameCard";
import { getGameGrid } from "../utils/functions/gameDeck";
import { CircularProgress } from "@mui/material";
import { WinModal } from "./WinModal";
import { useSelector } from "react-redux";

export const Game = () => {
  const [gameGrid, setGameGrid] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [blocking, setBlocking] = useState(false);
  const [guessedCards, setGuessedCards] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [reload, setReload] = useState(0);

  const { row, col } = useSelector((state) => state.difficulty);

  useEffect(() => {
    const grid = getGameGrid(row, col);
    setGameGrid(grid);
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

  const restart = () => {
    setSelectedCards([]);
    setGuessedCards([]);
    setCompleted(false);
    setReload((prevState) => prevState + 1);
  };

  return gameGrid.length === 0 ? (
    <CircularProgress />
  ) : (
    <div className="flex flex-col w-full justify-center items-center">
      {gameGrid.map((e) => (
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
