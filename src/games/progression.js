import launchGame from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  const begin = getRandomNum(1, 30);
  const step = getRandomNum(1, 30);
  let current = begin;
  const result = [begin];
  for (let i = 0; i < 10; i += 1) {
    current += step;
    result.push(current);
  }
  return result;
};

const playGame = () => {
  const progression = getProgression();
  const index = getRandomNum(0, 10);
  const rightAnswer = String(progression[index]);
  progression[index] = '..';
  const stringProg = progression.join(' ');
  return [stringProg, rightAnswer];
};

const run = () => launchGame(playGame, rules);

export default run;
