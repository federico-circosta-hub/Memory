import React, { useState } from "react";
import {
  Modal,
  Button,
  CircularProgress,
  ThemeProvider,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { usePostScoreMutation, useGetScoreQuery } from "../api/apiSlice";
import { theme } from "../Themes/CustomMuiTheme";

export const WinModal = ({ open, restart }) => {
  const [username, setUsername] = useState("");
  const [formError, setFormError] = useState({});

  const score = useSelector((state) => state.game.score);

  const { data: scores, isLoading: isGetScoreLoading } = useGetScoreQuery();
  const [postScore, { data: postedScore, isLoading: isPostScoreLoading }] =
    usePostScoreMutation();

  const handleUsernameInput = (e) => {
    setFormError({});
    setUsername(e.target.value);
  };

  const handleShareScore = () => {
    if (username.trim().length < 2) {
      setFormError({ username: "Insert a valid username" });
      return;
    }
    postScore({ username: username, score: score });
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal
        className="w-full h-full flex items-center justify-center"
        open={open}
      >
        <div className="flex flex-col bg-secondary h-96 w-96 text-center justify-center items-center gap-4">
          <p className="">You're score is {score}</p>

          <Button
            onClick={restart}
            className="animate-pulse-slowly w-6/12"
            variant="contained"
            color="primary"
          >
            <Typography color={theme.palette.tertiary.main}>Retry</Typography>
          </Button>
          <Divider className="my-4" />
          <TextField
            disabled={isPostScoreLoading}
            placeholder="Insert your username"
            value={username}
            onChange={(e) => handleUsernameInput(e)}
            error={Boolean(formError.username)}
            helperText={formError.username}
          />
          <Button
            onClick={handleShareScore}
            className="w-6/12"
            variant="contained"
            disabled={isPostScoreLoading || postedScore}
          >
            {isPostScoreLoading ? "Sharing..." : "Share score"}
          </Button>
          <Divider className="my-4" />
          <div className="w-full flex flex-col items-center overflow-auto">
            Top player
            <table className="w-full">
              <thead>
                <tr className="w-full">
                  <th className="w-5/12">username</th>
                  <th className="w-5/12">score</th>
                </tr>
              </thead>
              <tbody>
                {isGetScoreLoading && (
                  <tr>
                    <td colSpan={2}>{<CircularProgress />}</td>
                  </tr>
                )}
                {scores &&
                  scores?.map((e, index) => (
                    <tr key={index}>
                      <td>{e.username}</td>
                      <td>{e.score}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </ThemeProvider>
  );
};
