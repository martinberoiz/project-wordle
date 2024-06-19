import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function guessRow(word, answer) {
  if (word === "") {
    return range(5).map((index) => {
      return <span className="cell" key={index}></span>;
    });
  } else {
    wordSplit = checkGuess(word, answer);
    return wordSplit.map((char, index) => {
      return (
        <span className={`cell ${char.status}`} key={index}>
          {char.letter}
        </span>
      );
    });
  }
}

function Guess({ answer, children: word }) {
  return <p className="guess">{guessRow(word, answer)}</p>;
}

export default Guess;
