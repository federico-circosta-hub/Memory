import React, { useState, useEffect } from "react";
import { GameCard } from "./GameCard";
import { getGameGrid } from "../utils/functions/gameDeck";
import { CircularProgress } from "@mui/material";
import { WinModal } from "./WinModal";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseScore,
  increaseScoreGuessedCards,
  newGame,
} from "../gameSlice/gameSlice";

export const Game = () => {
  const [gameGrid, setGameGrid] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [blocking, setBlocking] = useState(false);
  const [guessedCards, setGuessedCards] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [reload, setReload] = useState(0);

  const { row, col } = useSelector((state) => state.difficulty);
  const dispatch = useDispatch();

  const increaseTurnCount = (cardId) => {
    const updatedGrid = gameGrid.map((row) =>
      row.map((card) =>
        card.id === cardId ? { ...card, turnCount: card.turnCount + 1 } : card
      )
    );
    setGameGrid(updatedGrid);
  };

  useEffect(() => {
    dispatch(newGame());
    const grid = getGameGrid(row, col);
    setGameGrid(grid);
  }, [reload, col, row, dispatch]);

  useEffect(() => {
    selectedCards.length === 1 &&
      selectedCards[0].turnCount > 1 &&
      dispatch(decreaseScore());
    if (selectedCards.length === 2) {
      selectedCards[1].turnCount > 1 && dispatch(decreaseScore());
      setBlocking(true);
      setTimeout(() => {
        setSelectedCards([]);
        setBlocking(false);
      }, 1500);
      if (selectedCards[0].animal.name === selectedCards[1].animal.name) {
        dispatch(increaseScoreGuessedCards());
        setGuessedCards((prevState) => [
          ...prevState,
          selectedCards[0].id,
          selectedCards[1].id,
        ]);
      }
    }
  }, [selectedCards, dispatch]);

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
    <div className="flex flex-col w-full">
      {console.log("selectedCards", selectedCards)}
      {gameGrid.map((e) => (
        <div className="flex flex-row">
          {e.map((c) => (
            <GameCard
              blocking={blocking}
              animal={c.animal}
              id={c.id}
              turnCount={c.turnCount}
              increaseTurnCount={increaseTurnCount}
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
