import launchGame from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const playGame = () => {
  const inputNumber = getRandomNum(1, 100);
  const rightAnswer = isEven(inputNumber) ? 'yes' : 'no';
  return [inputNumber, rightAnswer];
};

const run = () => launchGame(playGame, rules);

export default run;
