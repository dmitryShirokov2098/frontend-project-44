import launchGame from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'What is the result of the expression?';

const actions = ['+', '-', '*'];

const getAction = (arr) => {
  const randomItem = Math.floor(Math.random() * arr.length);
  return arr[randomItem];
};

const getExpressionData = () => {
  const expressionData = [getRandomNum(1, 30), getAction(actions), getRandomNum(1, 30)];
  return expressionData;
};
const calc = (num1, num2, action) => {
  let result;
  switch (action) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return String(result);
};

const playCalc = () => {
  const [num1, action, num2] = getExpressionData();
  const expression = `${num1} ${action} ${num2}`;
  const rightAnswer = calc(num1, num2, action);
  return [expression, rightAnswer];
};

const run = () => launchGame(playCalc, rules);

export default run;
