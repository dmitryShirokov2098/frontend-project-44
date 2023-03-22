/* eslint-disable import/extensions */
/* eslint-disable no-console */

import launchGame from '../index.js';
import getNum from '../getRandomNum.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= num / 2) {
    if (num % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const check = (num) => {
  const result = isPrime(num) ? 'yes' : 'no';
  return result;
};

const isPrimeGame = () => {
  const inputNumber = getNum(1, 30);
  const rightAnswer = check(inputNumber);
  return [inputNumber, rightAnswer];
};

const run = () => launchGame(isPrimeGame, rules);

export default run;
