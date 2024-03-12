import React from "react";
import { useSelector } from "react-redux";

export const Score = () => {
  const score = useSelector((state) => state.game.score);
  return (
    <div className="w-full flex justify-center">
      <h2 className="text-xl mx-2 font-bold text-tertiary">Score: {score}</h2>
    </div>
  );
};
