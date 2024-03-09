import "./App.css";
import React, { useState } from "react";
import { Game } from "./components/Game";
import { columns, rows } from "./utils/functions/setGameSize";
import { ChooseDifficulty } from "./components/ChooseDifficulty";

function App() {
  const [difficulty, setDifficulty] = useState("hard");
  const [r] = useState(rows(difficulty));
  const [c] = useState(columns(difficulty));
  return (
    <div className='p-8 flex flex-col justify-center align-center bg-[url("./media/miscImages/questioning-concept-with-question-mark_23-2150408209.avif")] bg-no-repeat bg-cover bg-center'>
      <ChooseDifficulty setDifficulty={setDifficulty} />
      <Game rows={r} col={c} />
    </div>
  );
}

export default App;
