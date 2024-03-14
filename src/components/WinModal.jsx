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
import { Send } from "@mui/icons-material";

export const WinModal = ({ open, restart }) => {
  const [username, setUsername] = useState("");
  const [formError, setFormError] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const score = useSelector((state) => state.game.score);

  const { data: scores, isLoading: isGetScoreLoading } = useGetScoreQuery();
  const [postScore, { data: postedScore, isLoading: isPostScoreLoading }] =
    usePostScoreMutation();

  const handleUsernameInput = (e) => {
    setFormError({});
    setUsername(e.target.value);
  };

  const handleSendScore = () => {
    if (username.trim().length < 2) {
      setFormError({ username: "Insert a valid username" });
      return;
    }
    postScore({ username: username, score: score });
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal
        className="w-full h-full flex items-center justify-center "
        open={open}
      >
        <div className="flex flex-col bg-secondary h-fit w-4/12 text-center gap-8 items-center rounded-2xl p-4 shadow-tertiary shadow-lg">
          <div className="flex justify-center items-center">
            <div className="bg-gray-200 rounded-lg p-4">
              <h2 className="text-2xl font-bold text-primary mb-2">
                You're score is
              </h2>
              <div className="flex justify-center">
                <div className="text-tertiary text-6xl font-extrabold font-mono">
                  {score}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center gap-2">
            <div className="w-3/5 flex justify-end">
              <TextField
                disabled={isPostScoreLoading}
                placeholder="Insert your username"
                value={username}
                onChange={(e) => handleUsernameInput(e)}
                error={Boolean(formError.username)}
                helperText={formError.username}
              />
            </div>
            <div className="w-2/5 flex justify-start">
              <Button
                onClick={handleSendScore}
                className={`flex items-center space-x-2 rounded-xl p-2 transition-all duration-500 transform-gpu ${
                  isHovered ? "transform scale-r-110" : ""
                }`}
                variant="contained"
                disabled={isPostScoreLoading || postedScore}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? (
                  <span className="text-sm">
                    {isPostScoreLoading ? "Sending..." : "Send score"}
                  </span>
                ) : (
                  <Send className="text-lg" />
                )}
              </Button>
            </div>
          </div>
          <Divider className="my-10 w-64" />
          <div className="w-full flex flex-col items-center text-primary font-bold">
            <div className="w-full   text-3xl mb-2">Top player</div>
            <div className="overflow-auto flex justify-center border border-primary w-6/12 rounded-lg shadow-primary shadow-xl">
              <table className="w-full">
                <thead>
                  <tr className="w-full text-primary font-mono font-extrabold text-xl bg-tertiary">
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
                    scores.map((e, index) => (
                      <tr key={index}>
                        <td>{e.username}</td>
                        <td className="text-tertiary">{e.score}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <Divider className="my-10 w-6/12" />
          <div className="w-6/12 flex justify-center">
            <Button
              onClick={restart}
              className="animate-pulse-slowly w-6/12"
              variant="contained"
              color="primary"
            >
              <Typography
                fontWeight={600}
                fontSize={18}
                color={theme.palette.tertiary.main}
              >
                Retry
              </Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </ThemeProvider>
  );
};
