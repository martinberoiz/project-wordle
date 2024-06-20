import React from "react";
import RestartButton from "../RestartButton";

function FinalBanner({
  inProgress,
  successStatus,
  numGuesses,
  setNumGuesses,
  answer,
  setAnswer,
  setGuessedWords,
}) {
  if (inProgress) {
    return;
  } else if (successStatus) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
        <RestartButton
          setNumGuesses={setNumGuesses}
          setAnswer={setAnswer}
          setGuessedWords={setGuessedWords}
        />
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
        </p>
        <RestartButton
          setNumGuesses={setNumGuesses}
          setAnswer={setAnswer}
          setGuessedWords={setGuessedWords}
        />
      </div>
    );
  }
}

export default FinalBanner;
