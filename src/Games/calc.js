/* eslint-disable no-console */

import launchGame from '../index.js';

const rules = 'What is the result of the expression?';

const actions = ['+', '-', '*'];

const getAction = (arr) => {
  const randomItem = Math.floor(Math.random() * arr.length);
  return arr[randomItem];
};

const getNum = () => {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getExpress = () => {
  const expression = `${getNum()} ${getAction(actions)} ${getNum()}`;
  return expression;
};

const check = (express) => {
  const resultExpr = eval(express);
  const result = String(resultExpr);
  return result;
};

const isCalc = () => {
  const express = getExpress();
  const rightAnswer = check(express);
  return [express, rightAnswer];
};

const run = () => launchGame(isCalc, rules);

export default run;

/*
const isCalc = () => {
  const userName = greeting();
  console.log(rules);
  for (let i = 1; i <= 3; i += 1) {
    const express = getExpress();
    console.log(`Question: ${express}`);
    const rightAnswer = check(express);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
isCalc();
*/
