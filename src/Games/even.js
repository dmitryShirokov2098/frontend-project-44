/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(rules);

const getRandom = () => {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = (numb) => ((numb % 2 === 0) ? 'yes' : 'no');

const isEvenGame = () => {
  const userName = greeting();
  for (let i = 0; i < 3; i += 1) {
    const inputNumber = getRandom();
    console.log(`Question: ${inputNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const check = isEven(inputNumber);
    if (check === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${check}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  return `Congratulations, ${userName}!`;
};
isEvenGame();