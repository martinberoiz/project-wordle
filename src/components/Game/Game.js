import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import InputGuess from "../InputGuess";
import GuessGrid from "../GuessGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const initialGuesses = range(NUM_OF_GUESSES_ALLOWED).map((i) => {
    return { word: "", id: i };
  });
  [guessedWords, setGuessedWords] = React.useState(initialGuesses);
  [numGuesses, setNumGuesses] = React.useState(0);
  return (
    <>
      <GuessGrid guessedWords={guessedWords} answer={answer} />
      <InputGuess
        guessedWords={guessedWords}
        setGuessedWords={setGuessedWords}
        numGuesses={numGuesses}
        setNumGuesses={setNumGuesses}
      />
    </>
  );
}

export default Game;
