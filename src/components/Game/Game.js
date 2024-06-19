import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputGuess from "../InputGuess";
import GuessHistory from "../GuessHistory";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  [guessHistory, setGuessHistory] = React.useState([
    { guess: "money", id: crypto.randomUUID() },
    { guess: "talks", id: crypto.randomUUID() },
  ]);
  return (
    <>
      <GuessHistory guessHistory={guessHistory} />
      <InputGuess
        guessHistory={guessHistory}
        setGuessHistory={setGuessHistory}
      />
    </>
  );
}

export default Game;
