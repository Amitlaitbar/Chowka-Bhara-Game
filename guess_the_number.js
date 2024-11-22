function generateNumber(rangeStart, rangeEnd) {
  const randomNumber = Math.random() * (rangeEnd - rangeStart) + rangeStart;
  return Math.round(randomNumber);
}

function toContinue(startNum, endNum, guessedNumber) {
  if (confirm('\nDo you want to continue ?')) {
    startGame(startNum, endNum, 3);
  } else {
    console.log('\nThe number was..', guessedNumber);
  }

  return '\nGoodbye .. Have a Good Day !!';
}

function printEndmsg(startNum, endNum, guessedNumber) {
  const firstSegment = "\n>>>>Oh no! You've used all your attempts.\n";
  const seccondSegment = "Better luck next time!";
  const thirdSegment = toContinue(startNum, endNum, guessedNumber);

  return firstSegment + seccondSegment + thirdSegment;
}

function printWinningMsg(number) {
  const firstSegment = "\t\n✨✨✨ You've Made it. The number was " + number + "!";
  const seccondSegment = '\n\tCongratulations...💐💐💐 ';
  const thirdSegment = '-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_';

  return firstSegment + seccondSegment + thirdSegment;
}

function getNumberStatus(startNum, endNum, maxAttempts, guessedNumber) {
  if (maxAttempts < 1) {
    return printEndmsg(startNum, endNum, guessedNumber);
  }

  console.log("\n🧐 Take a guess! (Remaining attempts: " + maxAttempts + ")\n");
  const number = +prompt('Number => ');

  if (!number) {
    console.log('\n----------------------------------------------------');
    console.log('\t >>>>>>> Enter valid Input !');
    console.log('----------------------------------------------------\n');

    return getNumberStatus(startNum, endNum, maxAttempts, guessedNumber);
  }

  if (number === guessedNumber) {
    return printWinningMsg(number)
  }

  if (number > guessedNumber) {
    console.log("\n" + number + " Too high! Try a smaller number.");
    console.log('----------------------------------------------------');

    return getNumberStatus(startNum, endNum, maxAttempts - 1, guessedNumber);
  }

  if (number < guessedNumber) {
    console.log("\n" + number + " Too low! Try a higher number.");
    console.log('\n----------------------------------------------------');

    return getNumberStatus(startNum, endNum, maxAttempts - 1, guessedNumber);
  }
}

function startGame(startNum, endNum, maxAttempts, name) {
  const startSegment = '\nThe secret number is between ' + startNum + ' and ';
  const endSegment = endNum + `. You have ${maxAttempts} attempts to find it.`;

  console.log(startSegment + endSegment);

  const guessedNumber = generateNumber(startNum, endNum);

  console.log(getNumberStatus(startNum, endNum, maxAttempts, guessedNumber));
}

const wantsToPlay = confirm('\n >>>>> Are you ready to start a game ?');

if (wantsToPlay) {
  const name = prompt('\nEnter Your Name ');
  const rangeStart = generateNumber(1, 40);
  const rangeEnd = generateNumber(50, 100);
  const attempts = generateNumber(1, 10);

  console.log('\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');
  console.log(`\t🏆 Welcome ${name} to Guess the Number Game 🏆`);
  console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');

  startGame(rangeStart, rangeEnd, attempts, name);
}

if (!wantsToPlay) {
  console.log('\nOk... Fine 😜');
}
