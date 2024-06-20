/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = 'incorrect';
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

// This will return the state of the keyboard keys
// The keyboard keys are painted with "inanswer" class (yellow)
// if the letter is in the answer
// and "notinanswer" class (dark gray) if not.
export function classKeyboardKeys(words, answer) {
  if (words.length == 0) {
    return {};
  }
  const guessedKeys = new Set(words.map(({ word }) => word.split("")).flat());
  const guessChars = [...guessedKeys];
  const answerChars = answer.split('');

  const solution = {};

  for (let char of guessChars) {
    solution[char] = answerChars.includes(char) ? "inanswer" : "notinanswer";
  }

  return solution;
}
