import "./App.css";
import React from "react";
import { Game } from "./components/Game";
import { ChooseDifficulty } from "./components/ChooseDifficulty";

function App() {
  return (
    <div
      style={{ height: "100vh" }}
      className="w-full overflow-x-auto flex justify-start  bg-primary bg-no-repeat bg-cover bg-center" //bg-[url("./media/miscImages/questioning-concept-with-question-mark_23-2150408209.avif")]
    >
      <div className="vignette p-8 flex flex-col items-center overflow-auto">
        <div>
          <ChooseDifficulty />
        </div>
        <div className="max-w-full">
          <Game />
        </div>
      </div>
    </div>
  );
}

export default App;
