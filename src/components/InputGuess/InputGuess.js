import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function InputGuess({
  guessedWords,
  setGuessedWords,
  numGuesses,
  setNumGuesses,
  inProgress,
}) {
  [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length < 5) {
          return;
        }
        setGuess("");
        if (numGuesses >= NUM_OF_GUESSES_ALLOWED) {
          return;
        }
        const newGuessedWords = [...guessedWords];
        newGuessedWords[numGuesses] = { word: guess, id: numGuesses };
        setGuessedWords(newGuessedWords);
        setNumGuesses(numGuesses + 1);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        value={guess}
        id="guess-input"
        onChange={(e) => {
          if (e.target.value.length > 5) {
            return;
          }
          setGuess(e.target.value.toUpperCase());
        }}
        disabled={!inProgress}
      />
    </form>
  );
}

export default InputGuess;
