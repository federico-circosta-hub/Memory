import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import questionMark from "../media/miscImages/cool-question-mark-sticker.webp";

export const GameCard = ({
  animal,
  id,
  selectedCards,
  setSelectedCards,
  guessedCards,
  blocking,
  turnCount,
  increaseTurnCount,
}) => {
  return (
    <Card className="m-2 h-48 w-48 card transition-transform duration-500 ease-in-out transform hover:rotate-y-10 hover:scale-110">
      {selectedCards.some((obj) => obj.id === id) ? (
        <CardContent>
          <CardMedia
            className="h-36 w-full object-cover"
            component="img"
            alt={animal.name}
            image={animal.media}
          />
          <div className="mt-1">
            <Typography variant="p">{animal.name}</Typography>
          </div>
        </CardContent>
      ) : guessedCards.includes(id) ? (
        <div className="bg-slate-300 h-full w-full opacity-60">
          <CardContent>
            <CardMedia
              className="h-36 w-full object-cover"
              component="img"
              alt={animal.name}
              image={animal.media}
            />
            <div className="m-1">
              <Typography variant="p">{animal.name}</Typography>
            </div>
          </CardContent>
        </div>
      ) : (
        <CardContent>
          <CardMedia
            onClick={() => {
              if (!blocking) {
                increaseTurnCount(id);
                setSelectedCards((prevState) => [
                  ...prevState,
                  { animal, id, turnCount },
                ]);
              }
            }}
            className="h-40 w-48 object-cover"
            component="img"
            alt={"question-mark"}
            image={questionMark}
          />
          {/* <div className="mt-1">
            <Typography variant="p">Easy memory</Typography>
          </div> */}
        </CardContent>
      )}
    </Card>
  );
};
