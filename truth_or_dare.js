let prevTaskNum = 0;
function generateTaskNumber() {
  const taskNum = Math.round(Math.random() * 9 + 1);
  if (prevTaskNum !== taskNum) {
    return taskNum;
  }
  prevTaskNum = taskNum;
  generateTaskNumber();
}


function truth(taskNum) {
  switch (taskNum) {
    case 1:
      return "Your most embarrassing moment!!! 😇🤨";
    case 2:
      return "What is the biggest secret you're hiding from your parents?";
    case 3:
      return "When was the last time you cried?";
    case 4:
      return "What's the most embarrassing music you listen to?";
    case 5:
      return "What is your biggest regret in life?";
    case 6:
      return "What was the most inappropriate time you farted?";
    case 7:
      return "If you could be invisible for a day, what's the first thing you would do?";
    case 8:
      return "If you suddenly had a million pounds, how would you spend it?";
    case 9:
      return "When was the last time you helped a stranger?";
    case 10:
      return "Do you believe in ghosts?";
  }
}

function dare(taskNum) {
  switch (taskNum) {
    case 1:
      return "Tell the saddest story you know. 🧐";
    case 2:
      return "Dance without music for two minutes.🕺💃🏻";
    case 3:
      return "Talk in an American accent for the rest of the evening.🗣️";
    case 4:
      return "Try not to laugh for the next 10 minutes.🫢🤐";
    case 5:
      return "Call the first person in your phonebook and howl like a wolf.📞";
    case 6:
      return "Give up your phone for the rest of the day."
    case 7:
      return "Let someone else tickle you and try not to laugh";
    case 8:
      return "Keep your eyes closed until it’s your turn again.";
    case 9:
      return "sing song for whome next to you {should be romatic song}";
    case 10:
      return "do 10 push without failure if fails, start again";
  }
}


function playerSelection(numberOfPlayers) {
  return Math.round(Math.random() * (numberOfPlayers - 1) + 1);
}

function truthOrDare(taskNum) {
  const isTrue = confirm("\n\tEnter 'y' for truth and 'Press Enter' for Dare:");

  if (isTrue) {
    return '\nTruth => ' + truth(taskNum) + '\n';
  } else {
    console.log('\n Dare => ' + dare(taskNum));
    return prompt('\n\t**** Press "Enter" After Task completion !!');
  }

}

function roundInfo(playerNum, taskNum, noOfturn, roundLimit) {
  console.log("\tIt's player no. " + playerNum + "'s turn");
  console.log(truthOrDare(taskNum));

  if (noOfturn === roundLimit - 1) {
    return "\n\t\t***-------------- Last Round --------------***\n";
  }

  return "\n\t\t***-------------- Next Round --------------***\n";
}

function play(numberOfPlayers, noOfturn, roundLimit) {
  if (noOfturn > roundLimit) {
    const wantsToContinue = confirm('Do you want to continue the game ?');

    const endMessage = '\n\tThanks for Playing...🙂 Have a Good Day... 😊\n';
    return wantsToContinue ? play(numberOfPlayers, 0, 5) : endMessage;
  }

  const playerNum = playerSelection(numberOfPlayers);
  const taskNum = generateTaskNumber();

  console.log(roundInfo(playerNum, taskNum, noOfturn, roundLimit));

  return play(numberOfPlayers, noOfturn + 1, roundLimit);
}

console.log('\n*********** WELCOME TO THE TRUTH OR DARE GAME ***********\n\n');

const numberOfPlayers = prompt('\tEnter Number of Players to play the game >>');

console.log(play(numberOfPlayers, 0, 5));
