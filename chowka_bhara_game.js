// In this game only four players can play 

function moveForPlayer1(ground) {
  for (let index = 0; index < ground.length; index++) {
    if (ground[index] === "1") {
      console.log('inside the check');
      return index;
    }
  }
}

function createPlayGround() {

  let ground = '\n\t                P l a y e r 1              \n';
  ground += '\t  ┏━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┓ \n';
  ground += '\t  ┃       ┃       ┃ 1   2 ┃       ┃       ┃ \n';
  ground += '\t  ┃       ┃   ⇦   ┃       ┃       ┃       ┃ \n';
  ground += '\t  ┃       ┃       ┃ 3   4 ┃       ┃       ┃ \n';
  ground += '\t  ┣━━━━━━━╋━━━━━━━╋━━━━━━━╋━━━⇩━━━╋━━━━━━━┫ \n';
  ground += '\t  ┃       ┃       ┃       ┃       ┃       ┃ \n';
  ground += '\t  ┃       →       ┃       ┃       ┃   ⬆   ┃ \n';
  ground += '\tp ┃       ┃       ┃       ┃       ┃       ┃ p\n';
  ground += '\tl ┣━━━━━━━╋━━━━━━━╋━━━⇩━━━╋━━━━━━━╋━━━━━━━┫ l\n';
  ground += '\ta ┃ ➀   ➁ ┃       ┃       ┃       ┃ ➊   ➋ ┃ a\n';
  ground += '\ty ┃       ┃       →       ⬅       ┃       ┃ y\n';
  ground += '\te ┃ ➂   ➃ ┃       ┃       ┃       ┃ ➌   ➍ ┃ e\n';
  ground += '\tr ┣━━━━━━━╋━━━━━━━╋━━━⇡━━━╋━━━━━━━╋━━━━━━━┫ r\n';
  ground += '\t2 ┃       ┃       ┃       ┃       ┃       ┃ 4\n';
  ground += '\t  ┃   ↓   ┃       ┃       ┃       ⬅       ┃ \n';
  ground += '\t  ┃       ┃       ┃       ┃       ┃       ┃ \n';
  ground += '\t  ┣━━━━━━━╋━━━⇡━━━╋━━━━━━━╋━━━━━━━╋━━━━━━━┫ \n';
  ground += '\t  ┃       ┃       ┃ ❶   ❷ ┃       ┃       ┃ \n';
  ground += '\t  ┃       ┃       ┃       ┃   ⇢   ┃       ┃ \n';
  ground += '\t  ┃       ┃       ┃ ❸   ❹ ┃       ┃       ┃ \n';
  ground += '\t  ┗━━━━━━━┻━━━━━━━┻━━━━━━━┻━━━━━━━┻━━━━━━━┛ \n';
  ground += '\t                P l a y e r 3               \n';

 return ground;
}

const ground = createPlayGround();
console.log(ground);

console.log(moveForPlayer1(ground));
