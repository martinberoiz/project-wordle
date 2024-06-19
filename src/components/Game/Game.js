import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  [guess, setGuess] = React.useState({ guess: "" });
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.guess.length < 5) {
          return;
        }
        console.log(guess);
        setGuess({ guess: "" });
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        value={guess.guess}
        id="guess-input"
        onChange={(e) => {
          if (e.target.value.length > 5) {
            return;
          }
          setGuess({ guess: e.target.value.toUpperCase() });
        }}
      />
    </form>
  );
}

export default Game;
