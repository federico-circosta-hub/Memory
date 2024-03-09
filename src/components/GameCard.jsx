import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import questionMark from "../media/miscImages/questionCard.jpeg";

export const GameCard = ({
  animal,
  id,
  selectedCards,
  setSelectedCards,
  guessedCards,
}) => {
  return (
    <Card className="m-4 h-64 w-56 card transition-transform duration-500 ease-in-out transform focus:rotate-y-10 hover:scale-110">
      {selectedCards.some((obj) => obj.id === id) ? (
        <CardContent>
          <CardMedia
            className="h-42 w-full object-cover"
            component="img"
            alt={animal.name}
            image={animal.media}
          />
          <div className="m-2">
            <Typography variant="p">{animal.name}</Typography>
          </div>
        </CardContent>
      ) : guessedCards.includes(id) ? (
        <div className="bg-slate-300 h-full w-full opacity-60">
          <CardContent>
            <CardMedia
              className="h-42 w-full object-cover"
              component="img"
              alt={animal.name}
              image={animal.media}
            />
            <div className="m-2">
              <Typography variant="p">{animal.name}</Typography>
            </div>
          </CardContent>
        </div>
      ) : (
        <CardContent>
          <CardMedia
            onClick={() =>
              setSelectedCards((prevState) => [...prevState, { animal, id }])
            }
            className="h-42 w-32 object-cover"
            component="img"
            alt={"question-mark"}
            image={questionMark}
          />
          <div className="m-2">
            <Typography variant="p">Memory</Typography>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
