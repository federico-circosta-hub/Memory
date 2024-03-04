import React from "react";
import { ButtonGroup, Button } from "@mui/material";

import ChildCareIcon from "@mui/icons-material/ChildCare";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

export const ChooseDifficulty = ({ setDifficulty }) => {
  return (
    <>
      <ButtonGroup
        variant="contained"
        className="w-6/12 p-4 mx-auto flex flex-row justify-center gap-3"
      >
        <h2 className="text-xl mx-2 font-bold text-blue-500 animate-pulse-slowly">
          Choose difficulty
        </h2>
        <Button
          onClick={() => setDifficulty("easy")}
          endIcon={<ChildCareIcon />}
        >
          Easy
        </Button>
        <Button
          onClick={() => setDifficulty("medium")}
          endIcon={<TagFacesIcon />}
        >
          Medium
        </Button>
        <Button
          onClick={() => setDifficulty("hard")}
          endIcon={<SentimentSatisfiedIcon />}
        >
          Hard
        </Button>
      </ButtonGroup>
    </>
  );
};
