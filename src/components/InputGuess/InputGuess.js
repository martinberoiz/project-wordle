import React from "react";

function InputGuess({ guessHistory, setGuessHistory }) {
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
        newHistory = [
          ...guessHistory,
          { guess: guess, id: crypto.randomUUID() },
        ];
        setGuessHistory(newHistory);
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
