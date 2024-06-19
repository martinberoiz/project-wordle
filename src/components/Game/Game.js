import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputGuess from "../InputGuess";
import GuessGrid from "../GuessGrid";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  [guessedWords, setGuessedWords] = React.useState([
    { word: "money", id: crypto.randomUUID() },
    { word: "talks", id: crypto.randomUUID() },
  ]);
  return (
    <>
      <GuessGrid guessedWords={guessedWords} />
      <InputGuess
        guessedWords={guessedWords}
        setGuessedWords={setGuessedWords}
      />
    </>
  );
}

export default Game;
