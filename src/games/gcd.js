import launchGame from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let i = 1;
  let result = 0;
  while (i <= num1 || i <= num2) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
    i += 1;
  }
  return String(result);
};

const playGame = () => {
  const num1 = getRandomNum(1, 30);
  const num2 = getRandomNum(1, 30);
  const task = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2);
  return [task, rightAnswer];
};

const run = () => launchGame(playGame, rules);

export default run;
