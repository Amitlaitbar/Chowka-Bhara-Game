// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.

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

function numLowOrHigh(number, guessedNumber, startNum, endNum, maxAttempts) {
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

function printEndmsg(startNum, endNum, guessedNumber) {
  console.log("\n>>>>Oh no! You've used all your attempts.\n");
  console.log("Better luck next time!");
  console.log(toContinue(startNum, endNum, guessedNumber));

  return 0;
}

function numValidation(startNum, endNum, maxAttempts, guessedNumber, number) {
  if (!number) {
    console.log('\n----------------------------------------------------');
    console.log('\t >>>>>>> Enter valid Input !');
    console.log('----------------------------------------------------\n');

    return getNumberStatus(startNum, endNum, maxAttempts, guessedNumber);
  }
}

function printWinningMsg(number) {
  console.log("\t\n✨✨✨ You've Made it. The number was " + number + "!");
  console.log('\n\tCongratulations...💐💐💐 ');
  console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');
}

function getNumberStatus(startNum, endNum, maxAttempts, guessedNumber) {
  if (maxAttempts < 1) {
    return printEndmsg(startNum, endNum, guessedNumber);
  }

  console.log("\n🧐 Take a guess! (Remaining attempts: " + maxAttempts + ")\n");
  const number = +prompt('Number => ');

  numValidation(startNum, endNum, maxAttempts, guessedNumber, number);
  numLowOrHigh(number, guessedNumber, startNum, endNum, maxAttempts);

  if (number === guessedNumber) {
    printWinningMsg(number)
  }

  return '';
}

function startGame(startNum, endNum, maxAttempts, name) {
  const startSegment = '\nThe secret number is between ' + startNum + ' and ';
  const endSegment = endNum + `. You have ${maxAttempts} attempts to find it.`;

  console.log(startSegment + endSegment);

  const guessedNumber = generateNumber(startNum, endNum);

  console.log(getNumberStatus(startNum, endNum, maxAttempts, guessedNumber));
}

if (confirm('\n >>>>> Are you ready to start a game ?')) {
  const name = prompt('\nEnter Your Name ');
  const rangeStart = Math.round(Math.random() * (40 - 1) + 1);
  const rangeEnd = Math.round(Math.random() * (100 - 50) + 50);
  const attempts = Math.round(Math.random() * 9 + 1);

  console.log('\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');
  console.log(`\t🏆 Welcome ${name} to Guess the Number Game 🏆`);
  console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');

  startGame(rangeStart, rangeEnd, attempts, name);
} 
