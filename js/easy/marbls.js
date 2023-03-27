'use strict';

(() => {
  const phrases = {
    botWonEven: 'Бот угадал, что число четное, ваши очки переходят сопернику!',
    botWonOdd: 'Бот угадал, что число нечетное, ваши очки переходят сопернику!',
    botLost: 'Бот не угадал, очки переходят вам!',
  };

  const game = () => {
    const numberOfBalls = {
      player: 5,
      bot: 5,
    };

    return function start() {
      if (numberOfBalls.bot <= 0) {
        return alert('Вы выиграли!');
      }
      if (numberOfBalls.player <= 0) {
        return alert('Бот выиграл!');
      }
      const inputPhrase = `Введите число от 1 до ${numberOfBalls.player}`;
      if (numberOfBalls.bot >= 1 && numberOfBalls.player >= 1) {
        let playerNumber = prompt(inputPhrase);

        if (playerNumber > numberOfBalls.player || playerNumber <= 0) {
          alert(inputPhrase);
          start();
        }

        if (playerNumber === '') {
          alert(inputPhrase);
          start();
        }

        if (playerNumber === null) {
          return alert('Игра окончена!');
        }

        const botChoice = Math.round(Math.random());
        playerNumber = Number(playerNumber);

        if (botChoice === 0 && playerNumber % 2 === 0) {
          numberOfBalls.bot += playerNumber;
          numberOfBalls.player -= playerNumber;
          alert(phrases.botWonEven);
          start();
        } else if (botChoice === 1 && playerNumber % 2 !== 0) {
          numberOfBalls.bot += playerNumber;
          numberOfBalls.player -= playerNumber;
          alert(phrases.botWonOdd);
          start();
        } else {
          numberOfBalls.bot -= playerNumber;
          numberOfBalls.player += playerNumber;
          alert(phrases.botLost);
          start();
        }
      }
    };
  };

  window.marbls = game;
})();
