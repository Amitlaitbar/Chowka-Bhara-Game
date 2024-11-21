// In this game only four players can play 

function isNumberPresent(numbersString, numberToCheck) {
  numberToCheck = numberToCheck + '';
  for (let index = 0; index < numbersString.length; index += 3) {
    const numberThere = numbersString[index] + numbersString[index + 1] + numbersString[index + 2];
    // console.log(numberThere);

    if (numberToCheck === numberThere) {
      return true;
    }
  }

  return false;
}


function rollDice() {
  const dicedNumber = Math.round(Math.random() * 4 + 1);
  return dicedNumber;
}

function replaceAtIndex(targetIndex, string, char) {
  // console.log('inside replace');
  // console.log(targetIndex);


  let returnString = "";

  for (let index = 0; index < string.length; index++) {
    let currentChar = targetIndex === index ? char : string[index];

    returnString += currentChar;
  }

  return returnString;
}

function getNewIndex(dicedNumber, index) {
  const stringForPlus192 = "098102194198290294386390482486578582674678770774";
  const stringForMinus192 = "898902994998706710802806514518610614322326418422";
  const stringMinus8 = "106110114118122126130134202206210214218222226230";
  const stringPlus8 = "866870874878882886890894962966970974978982986990";

  for (let num = 1; num <= dicedNumber; num++) {

    if (isNumberPresent(stringForPlus192, index) || index === 98) {
      index = index + 192;
      continue;
    }

    if (isNumberPresent(stringMinus8, index)) {
      index = index - 8;
      continue;
    }

    if (isNumberPresent(stringPlus8, index)) {
      index = index + 8;
      continue;
    }

    if (isNumberPresent(stringForMinus192, index)) {
      index = index - 192;
      continue;
    }
  }

  return index;
}

function moveForPlayer1(ground, dicedNumber, index) {
  ground = replaceAtIndex(index, ground, ' ');

  const newIndex = getNewIndex(dicedNumber, index);
  console.log("newIndex", newIndex);
  
  ground = replaceAtIndex(newIndex, ground, '2');

  return ground;
}


// 106
// let number = 962;
// function createString() {
//   let string = '';
//   for (let i = 0; i < 8; i++) {
//     let stringNumber = number + "";
//     string += stringNumber;
//     number += 4;
//   }

//   console.log(string);
// }

// createString();

function createPlayGround() {


  let ground = '\n\t                  P l a y e r            \n';
  ground += '\t   ┏━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┓  \n';
  ground += '\t   ┃       ┃       ┃ 1   2 ┃       ┃       ┃  \n';
  ground += '\t   ┃       ┃   ⇦   ┃       ┃       ┃       ┃  \n';
  ground += '\t   ┃       ┃       ┃ 3   4 ┃       ┃       ┃  \n';
  ground += '\t   ┣━━━━━━━╋━━━━━━━╋━━━━━━━╋━━━⇩━━━╋━━━━━━━┫  \n';
  ground += '\t   ┃       ┃       ┃       ┃       ┃       ┃  \n';
  ground += '\t   ┃       →       ┃       ┃       ┃   ⬆   ┃  \n';
  ground += '\t p ┃       ┃       ┃       ┃       ┃       ┃ p\n';
  ground += '\t l ┣━━━━━━━╋━━━━━━━╋━━━⇩━━━╋━━━━━━━╋━━━━━━━┫ l\n';
  ground += '\t a ┃ ➀   ➁ ┃       ┃       ┃       ┃ ➊   ➋ ┃ a\n';
  ground += '\t y ┃       ┃       →       ⬅       ┃       ┃ y\n';
  ground += '\t e ┃ ➂   ➃ ┃       ┃       ┃       ┃ ➌   ➍ ┃ e\n';
  ground += '\t r ┣━━━━━━━╋━━━━━━━╋━━━⇡━━━╋━━━━━━━╋━━━━━━━┫ r\n';
  ground += '\t   ┃       ┃       ┃       ┃       ┃       ┃  \n';
  ground += '\t   ┃   ↓   ┃       ┃       ┃       ⬅       ┃  \n';
  ground += '\t   ┃       ┃       ┃       ┃       ┃       ┃  \n';
  ground += '\t   ┣━━━━━━━╋━━━⇡━━━╋━━━━━━━╋━━━━━━━╋━━━━━━━┫  \n';
  ground += '\t   ┃       ┃       ┃ ❶   ❷ ┃       ┃       ┃  \n';
  ground += '\t   ┃       ┃       ┃       ┃   ⇢   ┃       ┃  \n';
  ground += '\t   ┃       ┃       ┃ ❸   ❹ ┃       ┃       ┃  \n';
  ground += '\t   ┗━━━━━━━┻━━━━━━━┻━━━━━━━┻━━━━━━━┻━━━━━━━┛  \n';
  ground += '\t                 P l a y e r                  \n';

  // console.log(ground.indexOf(9));
  return ground;
}


const ground = createPlayGround();
// console.log(ground);


// console.log('\n after moving');

console.log(moveForPlayer1(ground, 8, 118));
