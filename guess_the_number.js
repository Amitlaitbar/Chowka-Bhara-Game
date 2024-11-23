let WIN_OR_LOSE_MSG = '';

function generateNumber(rangeStart, rangeEnd) {
  const randomNumber = Math.random() * (rangeEnd - rangeStart) + rangeStart;
  return Math.round(randomNumber);
}

function takeInput(string) {
  return prompt(string);
}

function isValidNumber(guessedNumber) {
  return !!guessedNumber;
}

function isNumberGreater(guessedNumber, numberToGuess) {
  return guessedNumber > numberToGuess;
}

function isNumberLess(guessedNumber, numberToGuess) {
  return guessedNumber < numberToGuess;
}

function isNumberMatched(number, numberToGuess) {
  return number === numberToGuess;
}

function printDashedLine() {
  return '\n----------------------------------------------------';
}

function printDesignLine() {
  return '\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-';
}

function getNumberStatus(guessedNumber, numberToGuess) {
  if (isNumberGreater(guessedNumber, numberToGuess)) {
    let msgSegment = "\n" + guessedNumber + " Too high! Try a smaller number.";
    msgSegment += printDashedLine();

    return msgSegment;
  }

  if (isNumberLess(guessedNumber, numberToGuess)) {
    let msgSegment = "\n" + guessedNumber + " Too low! Try a higher number.";
    msgSegment += printDashedLine();

    return msgSegment;
  }

  return;
}

function winningMsg(guessedNumber) {
  let msgSegment = "\t\n✨You've Made it. The number was " + guessedNumber + "!";
  msgSegment += '\n\tCongratulations...💐💐💐 ';
  msgSegment += printDesignLine();

  return msgSegment;
}

function confirmation(questionString) {
  return confirm(questionString);
}

function wantsToContinue() {
  return confirmation('\nDo you want to continue ?');
}

function losingMsg(numberToGuess) {
  let msgSegment = "\n>>>>Oh no! You've used all your attempts.\n";
  msgSegment += 'The Number Was ..' + numberToGuess;
  msgSegment += "\nBetter luck next time!\n";

  return msgSegment;
}

function takeAGuessMsg(attempts) {
  console.log("\n🧐 Take a guess! (Remaining attempts: " + attempts + ")\n");
  return;
}

function playGame(rangeStart, rangeEnd, attempts, numberToGuess) {
  if (attempts < 1) {
    WIN_OR_LOSE_MSG = losingMsg(numberToGuess);
    return;
  }

  takeAGuessMsg(attempts);
  const guessedNumber = +takeInput('Enter Number =>');

  if (!isValidNumber(guessedNumber)) {
    console.log('Invalid Input !!');
    playGame(rangeStart, rangeEnd, attempts, numberToGuess);
  }

  if (isNumberMatched(guessedNumber, numberToGuess)) {
    WIN_OR_LOSE_MSG = winningMsg(guessedNumber);
    return;
  }

  console.log(getNumberStatus(guessedNumber, numberToGuess));

  playGame(rangeStart, rangeEnd, attempts - 1, numberToGuess);
}

function printGreetingMsg(name) {
  let msgSegment = printDesignLine();
  msgSegment += '\n\t🏆 Welcome ' + name + ' to Guess the Number Game 🏆';
  msgSegment += printDesignLine();

  return msgSegment;
}

function printInfoMsg(rangeStart, rangeEnd, attempts) {
  let msgSegment = '\nThe secret number is between ' + rangeStart + ' and ';
  msgSegment += rangeEnd + '. You have ' + attempts + ' attempts to find it.';

  return msgSegment;
}

function gameHome() {
  const wantsToPlay = confirmation('\n >>>>> Are you ready to start a game ?');

  if (wantsToPlay) {
    const name = takeInput('\nEnter Your Name ');
    const rangeStart = generateNumber(1, 40);
    const rangeEnd = generateNumber(50, 100);
    const attempts = generateNumber(1, 10);

    console.log(printGreetingMsg(name));
    console.log(printInfoMsg(rangeStart, rangeEnd, attempts));
    const numberToGuess = generateNumber(rangeStart, rangeEnd);

    playGame(rangeStart, rangeEnd, attempts, numberToGuess);
    console.log(WIN_OR_LOSE_MSG);

    if (wantsToContinue()) {
      gameHome();
    }
  }

  if (!wantsToPlay) {
    console.log('\nOk... Fine 😜');
  }
}

gameHome();
