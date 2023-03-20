/* eslint-disable import/extensions */
/* eslint-disable no-console */

import launchGame from '../index.js';
import getNum from '../getRandomNum.js';

const rules = 'What number is missing ine the progression?';

const progression = () => {
  const begin = getNum();
  const step = getNum();
  let current = begin;
  const result = [begin];
  for (let i = 0; i < 10; i += 1) {
    current += step;
    result.push(current);
  }
  return result;
};

const getRandomPlace = () => {
  const min = Math.ceil(0);
  const max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const replacement = () => {
  const coll = progression();
  const index = getRandomPlace();
  const rightAnswer = String(coll[index]);
  coll[index] = '..';
  let stringProg = '';
  for (let i = 0; i < coll.length; i += 1) {
    stringProg += `${coll[i]} `;
  }
  return [stringProg, rightAnswer];
};

const run = () => launchGame(replacement, rules);

export default run;
