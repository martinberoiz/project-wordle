import React from "react";

function InputGuess() {
  [guess, setGuess] = React.useState({ guess: "" });

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.guess.length < 5) {
          return;
        }
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

export default InputGuess;
