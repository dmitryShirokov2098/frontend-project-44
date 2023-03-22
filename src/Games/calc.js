/* eslint-disable no-console */

import launchGame from '../index.js';
import getNum from '../getRandomNum.js';

const rules = 'What is the result of the expression?';

const actions = ['+', '-', '*'];

const getAction = (arr) => {
  const randomItem = Math.floor(Math.random() * arr.length);
  return arr[randomItem];
};

const getExpress = () => {
  const expression = `${getNum(1, 30)} ${getAction(actions)} ${getNum(1, 30)}`;
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
