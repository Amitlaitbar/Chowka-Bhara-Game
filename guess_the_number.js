function generateNumber(rangeStart, rangeEnd) {
  const randomNumber = Math.random() * (rangeEnd - rangeStart) + rangeStart;
  return Math.round(randomNumber);
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

function dashedLine() {
  return '\n----------------------------------------------------';
}

function designLine() {
  return '\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-';
}

function getNumberStatus(guessedNumber, numberToGuess) {
  if (isNumberGreater(guessedNumber, numberToGuess)) {
    let msgSegment = "\n" + guessedNumber + " Too high! Try a smaller number.";
    msgSegment += dashedLine();

    return msgSegment;
  }
  if (isNumberLess(guessedNumber, numberToGuess)) {
    let msgSegment = "\n" + guessedNumber + " Too low! Try a higher number.";
    msgSegment += dashedLine();

    return msgSegment;
  }
}

function winningMsg(guessedNumber) {
  let msgSegment = "\t\n✨You've Made it. The number was " + guessedNumber + "!";
  msgSegment += '\n\tCongratulations...💐💐💐 ';
  msgSegment += designLine();

  return msgSegment;
}

function losingMsg(numberToGuess) {
  let msgSegment = "\n>>>>Oh no! You've used all your attempts.\n";
  msgSegment += 'The Number Was ..' + numberToGuess;
  msgSegment += "\nBetter luck next time!\n";

  return msgSegment;
}

function printRemainingAttemptsMsg(attempts) {
  console.log("\n🧐 Take a guess! (Remaining attempts: " + attempts + ")\n");
}

function printGreetingMsg(name) {
  let msgSegment = designLine();
  msgSegment += '\n\t🏆 Welcome ' + name + ' to Guess the Number Game 🏆';
  msgSegment += designLine();

  return msgSegment;
}

function printInfoMsg(rangeStart, rangeEnd, attempts) {
  let msgSegment = '\nThe secret number is between ' + rangeStart + ' and ';
  msgSegment += rangeEnd + '. You have ' + attempts + ' attempts to find it.';

  return msgSegment;
}

function playGame(rangeStart, rangeEnd, attempts, numberToGuess) {
  if (attempts < 1) {
    return losingMsg(numberToGuess);
  }

  printRemainingAttemptsMsg(attempts);

  const guessedNumber = +prompt('Enter Number =>');

  if (!isValidNumber(guessedNumber)) {
    console.log('Invalid Input !!');
    playGame(rangeStart, rangeEnd, attempts, numberToGuess);
  }
  if (isNumberMatched(guessedNumber, numberToGuess)) {
    return winningMsg(guessedNumber);
  }

  console.log(getNumberStatus(guessedNumber, numberToGuess));

  return playGame(rangeStart, rangeEnd, attempts - 1, numberToGuess);
}

function gameHome() {
  const wantsToPlay = confirm('\n >>>>> Are you ready to start a game ?');

  if (!wantsToPlay) {
    return '\nOk... Fine 😜';
  }

  const name = prompt('\nEnter Your Name ');
  const rangeStart = generateNumber(1, 40);
  const rangeEnd = generateNumber(50, 100);
  const attempts = generateNumber(1, 10);

  console.log(printGreetingMsg(name));
  console.log(printInfoMsg(rangeStart, rangeEnd, attempts));

  const numberToGuess = generateNumber(rangeStart, rangeEnd);

  console.log(playGame(rangeStart, rangeEnd, attempts, numberToGuess));

  if (confirm('\nDo you want to continue ?')) {
    gameHome();
  }

  return '\nThanks For Playing !!';
}

console.log(gameHome());
