import React from "react";

import Guess from "../Guess";

function GuessGrid({ guessedWords, answer }) {
  return (
    <div className="guess-results">
      {guessedWords.map(({ id, word }) => {
        return (
          <Guess key={id} answer={answer}>
            {word}
          </Guess>
        );
      })}
    </div>
  );
}

export default GuessGrid;
