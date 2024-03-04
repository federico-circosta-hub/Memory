import "./App.css";
import React, { useState } from "react";
import { Game } from "./components/Game";
import { columns, rows } from "./utils/functions/setGameSize";
import { ChooseDifficulty } from "./components/ChooseDifficulty";

function App() {
  const [difficulty, setDifficulty] = useState("hard");
  const [r, setRows] = useState(rows(difficulty));
  const [c, setCol] = useState(columns(difficulty));
  return (
    <div className="p-8 flex flex-col justify-center align-center">
      <ChooseDifficulty setDifficulty={setDifficulty} />
      <Game rows={r} col={c} />
    </div>
  );
}

export default App;
