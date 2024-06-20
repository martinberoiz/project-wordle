import React from "react";
import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function RestartButton({ setNumGuesses, setAnswer, setGuessedWords }) {
  return (
    <button
      className="btn"
      onClick={(e) => {
        e.preventDefault();
        setAnswer(sample(WORDS));
        setNumGuesses(0);
        const initialGuesses = range(NUM_OF_GUESSES_ALLOWED).map((i) => {
          return { word: "", id: i };
        });
        setGuessedWords(initialGuesses);
      }}
    >
      Restart
    </button>
  );
}

export default RestartButton;
