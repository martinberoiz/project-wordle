import React from "react";

function Guess({ children: word }) {
  return (
    <p className="guess">
      {Array.from(word).map((letter, index) => {
        return (
          <span className="cell" key={index}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
