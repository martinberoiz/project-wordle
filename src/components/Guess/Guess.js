import React from "react";
import { range } from "../../utils";

function guessRow(word) {
  if (word === "") {
    return range(5).map((index) => {
      return <span className="cell" key={index}></span>
    })
  } else {
    return Array.from(word).map((letter, index) => {
      return (
        <span className="cell" key={index}>
          {letter}
        </span>
      );
    });
  }
}

function Guess({ children: word }) {
  return <p className="guess">{guessRow(word)}</p>;
}

export default Guess;
