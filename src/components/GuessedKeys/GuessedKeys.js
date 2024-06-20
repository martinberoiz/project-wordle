import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessedKeys({ guessedWords: words, answer }) {
  const guessedKeys = new Set(words.map(({ word }) => word.split("")).flat());
  keyboardUp = "QWERTYUIOP";
  keyboardMiddle = "ASDFGHJKL";
  keyboardDown = "ZXCVBNM";
  keyboard = [keyboardUp, keyboardMiddle, keyboardDown];
  const alphabet = keyboard.map((w) => w.split("")).flat();
  const keyStatus = Object.fromEntries(
    alphabet.map((letter) => {
      return [letter, "unknown"];
    })
  );
  const keycheck = checkGuess([...guessedKeys].join(""), answer) || [{}];
  for ({ letter, status: state } of keycheck) {
    keyStatus[letter] = state;
  }
  return (
    <div className="keyboard-wrapper">
      {keyboard.map((row, index) => {
        return (
          <div className="keyboard-row" key={index}>
            {row.split("").map((key) => {
              const classStatus = keyStatus[key];
              return (
                <div className={`keyboard-cell ${classStatus}`} key={key}>
                  {key}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default GuessedKeys;
