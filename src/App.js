import "./App.css";
import React from "react";
import { Game } from "./components/Game";
import { ChooseDifficulty } from "./components/ChooseDifficulty";

function App() {
  return (
    <div
      style={{ height: "100vh", overflow: "auto" }}
      className='vignette p-8 flex flex-col justify-start align-center bg-[url("./media/miscImages/questioning-concept-with-question-mark_23-2150408209.avif")] bg-no-repeat bg-cover bg-center'
    >
      <ChooseDifficulty />
      <Game />
    </div>
  );
}

export default App;
