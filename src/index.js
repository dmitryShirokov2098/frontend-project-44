/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const numOfRounds = 3;

const launchGame = (fun, rules) => {
  const userName = greeting();
  console.log(rules);
  for (let i = 1; i <= numOfRounds; i += 1) {
    const [task, rightAnswer] = fun();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
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
export default launchGame;
