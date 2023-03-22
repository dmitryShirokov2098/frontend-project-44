/* eslint-disable import/extensions */
/* eslint-disable no-console */

import launchGame from '../index.js';
import getNum from '../getRandomNum.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const check = (num) => {
  const result = isEven(num) ? 'yes' : 'no';
  return result;
};

const isEvenGame = () => {
  const inputNumber = getNum(1, 100);
  const rightAnswer = check(inputNumber);
  return [inputNumber, rightAnswer];
};

const run = () => launchGame(isEvenGame, rules);

export default run;
