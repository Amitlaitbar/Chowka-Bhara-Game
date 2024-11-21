// In this game only four players can play 

function createPlayGround() {
  let ground = "←←←←←←←←←←←←←←←←CHOWKA BHARA GAME→→→→→→→→→→\n";
  ground += '┏━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┓\n';
  ground += '┃       ┃       ┃1️⃣    2️⃣ ┃       ┃       ┃\n';
  ground += '┃       ┃       ┃       ┃       ┃       ┃\n';
  ground += '┃       ┃       ┃3️⃣    4️⃣ ┃       ┃       ┃\n';
  ground += '┣━━━━━━━╋━━━━━━━╋━━━━━━━╋━━━⇩━━━╋━━━━━━━┫\n';
  ground += '┃       ┃       ┃       ┃       ┃       ┃\n';
  ground += '┃       ⇨       ┃       ┃       ┃       ┃\n';
  ground += '┃       ┃       ┃       ┃       ┃       ┃\n';
  ground += '┣━━━━━━━╋━━━━━━━╋━━━⇩━━━╋━━━━━━━╋━━━━━━━┫\n';
  ground += '┃ ➀   ➁ ┃       ┃       ┃       ┃ ➊   ➋ ┃\n';
  ground += '┃       ┃       ⇨       ⇦       ┃       ┃\n';
  ground += '┃ ➂   ➃ ┃       ┃       ┃       ┃ ➌   ➍ ┃\n';
  ground += '┣━━━━━━━╋━━━━━━━╋━━━⇧━━━╋━━━━━━━╋━━━━━━━┫\n';
  ground += '┃       ┃       ┃       ┃       ┃       ┃\n';
  ground += '┃       ┃       ┃       ┃       ⇦       ┃\n';
  ground += '┃       ┃       ┃       ┃       ┃       ┃\n';
  ground += '┣━━━━━━━╋━━━⇧━━━╋━━━━━━━╋━━━━━━━╋━━━━━━━┫\n';
  ground += '┃       ┃       ┃ ❶   ❷ ┃       ┃       ┃\n';
  ground += '┃       ┃       ┃       ┃       ┃       ┃\n';
  ground += '┃       ┃       ┃ ❸   ❹ ┃       ┃       ┃\n';
  ground += '┗━━━━━━━┻━━━━━━━┻━━━━━━━┻━━━━━━━┻━━━━━━━┛';

  console.log(ground);
}

createPlayGround();
