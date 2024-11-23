let PREV_TASK_NUM = 0;

function generateNumber(rangeStart, rangeEnd) {
  const randomNumber = Math.random() * (rangeEnd - rangeStart) + rangeStart;
  return Math.round(randomNumber);
}

function generateTaskNumber() {
  const taskNum = generateNumber(1, 10);

  if (PREV_TASK_NUM !== taskNum) {
    return taskNum;
  }

  PREV_TASK_NUM = taskNum;
  generateTaskNumber();
}

function truth(taskNum) {
  let task = '';

  switch (taskNum) {
    case 1:
      task = "Your most embarrassing moment!!! 😇🤨";
      break;
    case 2:
      task = "What is the biggest secret you're hiding from your parents?";
      break;
    case 3:
      task = "When was the last time you cried? 😭";
      break;
    case 4:
      task = "What's the most embarrassing music you listen to? 🎧🎼";
      break;
    case 5:
      task = "What is your biggest regret in life?";
      break;
    case 6:
      task = "What was the most inappropriate time you farted?";
      break;
    case 7:
      task = "If you could be invisible for a day, what's the first thing you would do?";
      break;
    case 8:
      task = "If you suddenly had a million pounds, how would you spend it? 🤔";
      break;
    case 9:
      task = "When was the last time you helped a stranger?";
      break;
    case 10:
      task = "Do you believe in ghosts? 👻";
      break;
  }

  return task;
}

function dare(taskNum) {
  let task = '';

  switch (taskNum) {
    case 1:
      task = "Tell the saddest story you know. 🧐";
      break;
    case 2:
      task = "Dance without music for two minutes.🕺💃🏻";
      break;
    case 3:
      task = "Talk in an American accent for the rest of the evening.🗣️";
      break;
    case 4:
      task = "Try not to laugh for the next 10 minutes.🫢🤐";
      break;
    case 5:
      task = "Call the first person in your phonebook and howl like a wolf.📞";
      break;
    case 6:
      task = "Give up your phone for the rest of the day.😇";
      break;
    case 7:
      task = "Let someone else tickle you and try not to laugh.😅";
      break;
    case 8:
      task = "Keep your eyes closed until it’s your turn again.🙈🙈";
      break;
    case 9:
      task = "Sing song for whome next to you {It should be romatic song}.🎶🎵";
      break;
    case 10:
      task = "Do 10 push without failure if fails, start again.😈";
      break;
  }

  return task;
}

function playerSelection(numberOfPlayers) {
  return generateNumber(1, numberOfPlayers);
}

function printToNextLine() {
  return '\n';
}

function dashedLine() {
  return '----------------------------------------------------------';
}

function shortDashedLine() {
  return '------------------------------';
}

function isvalidInput(input) {
  return input === 'Truth' || input === 'Dare';
}

function printInvalidMsg() {
  let msgSegment = printToNextLine() + shortDashedLine();
  msgSegment += printToNextLine() + '| ❌ Enter valid Input !!        |';
  msgSegment += printToNextLine() + '------------------------------';

  console.log(msgSegment);
}

function truthOrDare(taskNum) {
  const input = prompt('\nEnter "Truth" for truth and "Dare" for dare : ');
  let msgSegment = ''

  if (!isvalidInput(input)) {
    printInvalidMsg();
    truthOrDare(taskNum);
  }

  if (input === 'Truth') {
    msgSegment += printToNextLine() + dashedLine();
    msgSegment += printToNextLine() + 'Your Truth Task is ☞ "' + truth(taskNum) + '"';
    msgSegment += printToNextLine() + dashedLine();
  }

  if (input === 'Dare') {
    msgSegment += printToNextLine() + dashedLine();
    msgSegment += printToNextLine() + 'Your Dare Task is ☞ "' + dare(taskNum) + '"';
    msgSegment += printToNextLine() + dashedLine();
  }

  console.log(msgSegment);
  prompt('\n\t**** Press "Enter" After Truth Task completion !!');

  return;
}

function printNextRoundMsg() {
  return "\n\t\t***-------------- Next Round --------------***\n";
}

function printLastRoundMsg() {
  return "\n\t\t***-------------- Last Round --------------***\n";
}

function printRoundInfo(playerNum, taskNum, noOfturn, roundLimit) {
  console.log("\t\nIt's player no. " + playerNum + "'s turn");
  truthOrDare(taskNum);

  const isEqual = noOfturn === roundLimit - 1;
  console.log(isEqual ? printLastRoundMsg() : printNextRoundMsg());
  return;
}

function printGreetMsg() {
  console.log();
}

function play(numberOfPlayers, noOfturn, roundLimit) {
  if (noOfturn > roundLimit) {
    const wantsToContinue = confirm('Do you want to continue the game ?');
    const endMessage = '\n\tThanks for Playing...🙂 Have a Good Day... 😊\n';

    return wantsToContinue ? play(numberOfPlayers, 0, 5) : endMessage;
  }

  const playerNum = playerSelection(numberOfPlayers)

  printRoundInfo(playerNum, generateTaskNumber(), noOfturn, roundLimit);
  return play(numberOfPlayers, noOfturn + 1, roundLimit);
}

console.log('\n*********** WELCOME TO THE TRUTH OR DARE GAME ***********\n\n');

const numberOfPlayers = prompt('\tEnter Number of Players to play the game >>');

console.log(play(numberOfPlayers, 0, 5));
