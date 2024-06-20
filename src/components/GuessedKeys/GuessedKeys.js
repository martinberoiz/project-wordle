import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessedKeys({ guessedWords: words, answer }) {
  // All unrepeated keys guessed so far Set(["A", "V", "P", ...])
  const guessedKeys = new Set(words.map(({ word }) => word.split("")).flat());
  // These are the 3 rows of the keyboard
  keyboardUp = "QWERTYUIOP";
  keyboardMiddle = "ASDFGHJKL";
  keyboardDown = "ZXCVBNM";
  // All the possible individual letters
  alphabet = [
    ...keyboardUp.split(""),
    ...keyboardMiddle.split(""),
    ...keyboardDown.split(""),
  ];
  // The status of every letter (initialized as unknown)
  const keyStatus = Object.fromEntries(
    alphabet.map((letter) => {
      return [letter, "unknown"];
    })
  );
  // Check the status of the guessed keys
  const keycheck = checkGuess([...guessedKeys].join(""), answer) || [{}];
  // Update all the letters based on the new info about guessed keys
  for ({ letter, status: state } of keycheck) {
    keyStatus[letter] = state;
  }
  return (
    <div className="keyboard-wrapper">
      {[keyboardUp, keyboardMiddle, keyboardDown].map((row, index) => {
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
