import React from "react";

function InputGuess({ guessedWords, setGuessedWords }) {
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
        const newGuessedWords = [
          ...guessedWords,
          { guess: guess, id: crypto.randomUUID() },
        ];
        setGuessedWords(newGuessedWords);
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
      />
    </form>
  );
}

export default InputGuess;
