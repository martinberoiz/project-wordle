import React from "react";

function GuessGrid({ guessedWords }) {
  return (
    <div className="guess-results">
      {guessedWords.map((g, index) => {
        return (
          <p className="guess" key={g.id}>
            {g.guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessGrid;
