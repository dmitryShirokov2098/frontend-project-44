/* eslint-disable import/extensions */
/* eslint-disable no-console */

import launchGame from '../index.js';
import getNum from '../getRandomNum.js';

const rules = 'What number is missing in the progression?';

const progression = () => {
  const begin = getNum(1, 30);
  const step = getNum(1, 30);
  let current = begin;
  const result = [begin];
  for (let i = 0; i < 10; i += 1) {
    current += step;
    result.push(current);
  }
  return result;
};

const randomPlace = getNum(0, 10);

const replacement = () => {
  const coll = progression();
  const index = randomPlace;
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
