const enemyTypes = require('../../data/enemy/enemyTypes');

const startGame = (conv) => {
  const {
    data: { spaceship },
  } = conv;

  const totalEnemies = enemyTypes.length;
  const randomEnemy =
    enemyTypes[Math.round(Math.random() * (totalEnemies - 1))];

  conv.data.enemy = randomEnemy;

  const locationArr = [];
  for (let i = 1; i <= 40; i += 1) {
    if (i !== 20 && i !== 21) locationArr.push(i);
  }

  const enemies = [];

  for (let i = 0; i < spaceship.enemies; i += 1) {
    const randomInitLocation = Math.round(Math.random() * 40) + 1;
    enemies.push({ ...randomEnemy, location: randomInitLocation });

    const removeFromInitialLocation = locationArr.indexOf(randomInitLocation);
    if (removeFromInitialLocation > -1) {
      locationArr.splice(removeFromInitialLocation, 1);
    }
  }

  conv.data.enemies = enemies;
  conv.data.officer.location = Math.round(Math.random() * 40) + 1;
};

module.exports = startGame;
