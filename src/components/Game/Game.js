import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import InputGuess from "../InputGuess";
import GuessGrid from "../GuessGrid";
import FinalBanner from "../FinalBanner";
import GuessedKeys from "../GuessedKeys";
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

  let inProgress = true;
  let successStatus;
  if (numGuesses == NUM_OF_GUESSES_ALLOWED) {
    if (guessedWords[numGuesses - 1].word === answer) {
      inProgress = false;
      successStatus = true;
    } else {
      inProgress = false;
      successStatus = false;
    }
  } else if (numGuesses > 0) {
    if (guessedWords[numGuesses - 1].word === answer) {
      inProgress = false;
      successStatus = true;
    }
  }

  return (
    <>
      <GuessGrid guessedWords={guessedWords} answer={answer} />
      <InputGuess
        guessedWords={guessedWords}
        setGuessedWords={setGuessedWords}
        numGuesses={numGuesses}
        setNumGuesses={setNumGuesses}
        inProgress={inProgress}
      />
      <GuessedKeys guessedWords={guessedWords} answer={answer} />
      <FinalBanner
        inProgress={inProgress}
        successStatus={successStatus}
        numGuesses={numGuesses}
        answer={answer}
      />
    </>
  );
}

export default Game;
