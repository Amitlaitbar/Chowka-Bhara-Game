function isSubStringPresent(string, subString, stringIndex) {
  for (let subStrIndex = 0; subStrIndex < subString.length; subStrIndex++) {
    if (subString[subStrIndex] !== string[stringIndex + subStrIndex]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  if (subString === '') {
    return false;
  }
  for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    if (isSubStringPresent(string, subString, stringIndex)) {
      return true;
    }
  }

  return false;
}

function generateNumber(rangeStart, rangeEnd) {
  const randomNumber = Math.random() * (rangeEnd - rangeStart) + rangeStart;
  return Math.round(randomNumber);
}

function getNumber(newString) {
  const number = '' + generateNumber(1, 6);

  if (!isSubstring(newString, number)) {
    return number;
  }

  return getNumber(newString);
}

function generateNumberString() {
  let newString = '';

  for (let i = 0; i < 5; i++) {
    newString += getNumber(newString);
  }

  return newString;
}

function generateColorCode() {
  const newString = generateNumberString();  
  let colorString = '';

  for (let index = 0; index < 5; index++) {
    if (newString[index] === '1') {
      colorString += '🟣';
    }
    if (newString[index] === '2') {
      colorString += '🔴';
    }
    if (newString[index] === '3') {
      colorString += '🔵';
    }
    if (newString[index] === '4') {
      colorString += '🟤';
    }
    if (newString[index] === '5') {
      colorString += '🟡';
    }
    if (newString[index] === '6') {
      colorString += '🟠';
    }
  }

  return colorString;
}

function computePresentColors(userColorcode, deviceColorCode) {
  let presentNumbers = 0;

  for (let index = 0; index < deviceColorCode.length; index += 2) {
    const color = deviceColorCode[index] + deviceColorCode[index + 1];

    for (let subIndex = 0; subIndex < userColorcode.length; subIndex += 2) {
      const inputColor = userColorcode[subIndex] + userColorcode[subIndex + 1];

      presentNumbers += color === inputColor ? 1 : 0;
    }
  }

  return presentNumbers;
}

function computeColorsOnRightPos(userColorCode, deviceColorCode) {
  let colorsOnRightPos = 0;

  for (let index = 0; index < userColorCode.length; index += 2) {
    const color = deviceColorCode[index] + deviceColorCode[index + 1];
    const inputColor = userColorCode[index] + userColorCode[index + 1];

    colorsOnRightPos += color === inputColor ? 1 : 0;
  }

  return colorsOnRightPos;
}

function playGame(chances, deviceColorCode) {
  if (chances > 10) {
    return 'Your chances are over !! \n You loose !!';
  }

  console.log('\n Pick any five colors that you want !!');

  const userColorCode = prompt("\n1 🔴  2 🟠  3 🟣  4 🔵  5 🟤  6 🟡 \n =>");
  const exact = computeColorsOnRightPos(userColorCode, deviceColorCode);
  const presentColors = computePresentColors(userColorCode, deviceColorCode)
  const missPlaced = presentColors - exact;

  console.log('\nExact Placed : ', exact);
  console.log('Miss Placed : ', missPlaced);
  console.log('Chances ', 10 - chances);

  if (exact === 5) {
    return 'You Won !!';
  }

  return playGame(chances + 1);
}

console.log('\n \t \t Welcome to master mind Game !! \n');

console.log(playGame(0, generateColorCode()));
