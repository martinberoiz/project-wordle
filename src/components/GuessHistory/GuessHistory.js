import React from "react";

function GuessHistory({ guessHistory }) {
  return (
    <div className="guess-results">
      {guessHistory.map((g, index) => {
        return (
          <p className="guess" key={g.id}>
            {g.guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessHistory;
