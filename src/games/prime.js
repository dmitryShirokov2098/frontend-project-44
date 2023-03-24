import launchGame from '../index.js';
import getRandomNum from '../utils.js';

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

const playGame = () => {
  const inputNumber = getRandomNum(1, 30);
  const rightAnswer = isPrime(inputNumber) ? 'yes' : 'no';
  return [inputNumber, rightAnswer];
};

const run = () => launchGame(playGame, rules);

export default run;
