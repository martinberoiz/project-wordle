import React from "react";

import Guess from "../Guess";

function GuessGrid({ guessedWords }) {
  return (
    <div className="guess-results">
      {guessedWords.map(({ id, word }) => {
        return (
          <Guess key={id}>{word}</Guess>
        );
      })}
    </div>
  );
}

export default GuessGrid;
