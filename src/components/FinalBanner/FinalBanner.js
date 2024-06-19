import React from "react";

function FinalBanner({
  inProgress = true,
  successStatus = false,
  numGuesses,
  answer,
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
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
        </p>
      </div>
    );
  }
}

export default FinalBanner;
