/* eslint-disable no-console */

import launchGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getNum = () => {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = (num) => (num % 2 === 0);

const check = (num) => {
  const result = isEven(num) ? 'yes' : 'no';
  return result;
};

const isEvenGame = () => {
  const inputNumber = getNum();
  const rightAnswer = check(inputNumber);
  return [inputNumber, rightAnswer];
};

const run = () => launchGame(isEvenGame, rules);

export default run;

/*
const isEvenGame = () => {
  const userName = greeting();
  console.log(rules);
  for (let i = 1; i <= 3; i += 1) {
    const inputNumber = getNum();
    console.log(`Question: ${inputNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = check(inputNumber);
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default isEvenGame;
*/
