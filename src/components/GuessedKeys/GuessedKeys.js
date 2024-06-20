import React from "react";
import { classKeyboardKeys } from "../../game-helpers";

function GuessedKeys({ guessedWords: words, answer }) {
  // These are the 3 rows of the keyboard
  keyboardUp = "QWERTYUIOP";
  keyboardMiddle = "ASDFGHJKL";
  keyboardDown = "ZXCVBNM";

  const keyState = classKeyboardKeys(words, answer);
  return (
    <div className="keyboard-wrapper">
      {[keyboardUp, keyboardMiddle, keyboardDown].map((row, index) => {
        return (
          <div className="keyboard-row" key={index}>
            {row.split("").map((char) => {
              // Pull the state from the keyState into stateClass variable
              const { [char]: stateClass = "unknown" } = keyState;
              return (
                <div className={`keyboard-cell ${stateClass}`} key={char}>
                  {char}
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
