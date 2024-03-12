import React from "react";
import { ButtonGroup, Button, ThemeProvider } from "@mui/material";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import { useDispatch, useSelector } from "react-redux";
import { changeDifficulty } from "../gameSlice/gameSlice";
import { Score } from "./Score";
import { theme } from "../Themes/CustomMuiTheme";

export const ChooseDifficulty = () => {
  const dispatch = useDispatch();
  const difficulty = useSelector((state) => state.game.difficulty.level);

  const handleChangeDifficulty = (s) => {
    dispatch(changeDifficulty(s));
  };

  return (
    <div className="flex flex-col w-fit p-4 mx-auto  items-center justify-center gap-3 bg-primary rounded-2xl">
      <ThemeProvider theme={theme}>
        <ButtonGroup variant="text" className="flex flex-row">
          <h2 className="text-xl mx-4 font-bold text-tertiary animate-pulse-slowly">
            Choose difficulty
          </h2>
          <Button
            color={difficulty === "easy" ? "tertiary" : "primary"}
            variant="contained"
            name="easy"
            onClick={() => handleChangeDifficulty("easy")}
            endIcon={<ChildCareIcon />}
          >
            Easy
          </Button>
          <Button
            color={difficulty === "medium" ? "tertiary" : "primary"}
            variant="contained"
            name="medium"
            onClick={() => handleChangeDifficulty("medium")}
            endIcon={<TagFacesIcon />}
          >
            Medium
          </Button>
          <Button
            color={difficulty === "hard" ? "tertiary" : "primary"}
            variant="contained"
            name="hard"
            onClick={() => handleChangeDifficulty("hard")}
            endIcon={<SentimentSatisfiedIcon />}
          >
            Hard
          </Button>
        </ButtonGroup>
      </ThemeProvider>
      <Score />
    </div>
  );
};
