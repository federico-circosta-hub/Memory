import React from "react";
import { Modal, Button } from "@mui/material";

export const WinModal = ({ open, restart }) => {
  return (
    <Modal
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      open={open}
    >
      <div className="flex flex-col bg-white h-64 w-96 text-center justify-center items-center gap-4">
        <p className="">You won!</p>

        <Button
          onClick={restart}
          className="animate-pulse-slowly w-6/12"
          variant="contained"
        >
          Again
        </Button>
      </div>
    </Modal>
  );
};
