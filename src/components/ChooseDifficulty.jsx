import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import { useDispatch, useSelector } from "react-redux";
import { changeDifficulty } from "../gameSlice/gameSlice";
//import { changeDifficulty } from "../gameSlice/gameSlice";

export const ChooseDifficulty = () => {
  const dispatch = useDispatch();
  const difficulty = useSelector((state) => state.difficulty.level);

  const handleChangeDifficulty = (s) => {
    dispatch(changeDifficulty(s));
  };
  return (
    <>
      <ButtonGroup
        variant="contained"
        className="w-6/12 p-4 mx-auto flex flex-row items-center justify-center gap-3 bg-slate-200"
      >
        <h2 className="text-xl mx-2 font-bold text-blue-500 animate-pulse-slowly">
          Choose difficulty
        </h2>
        <Button
          disabled={difficulty === "easy"}
          name="easy"
          onClick={() => handleChangeDifficulty("easy")}
          endIcon={<ChildCareIcon />}
        >
          Easy
        </Button>
        <Button
          name="medium"
          onClick={() => handleChangeDifficulty("medium")}
          endIcon={<TagFacesIcon />}
        >
          Medium
        </Button>
        <Button
          name="hard"
          onClick={() => handleChangeDifficulty("hard")}
          endIcon={<SentimentSatisfiedIcon />}
        >
          Hard
        </Button>
      </ButtonGroup>
    </>
  );
};
