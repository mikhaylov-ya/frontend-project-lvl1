import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const message = 'What number is missing in the progression?';

const length = 10;

const randomArithmeticProgression = (first, progressionStep, progressionLength) => {
  const expression = [];
  let current = 0;
  for (let i = 0; i < progressionLength; i += 1) {
    current = first + (progressionStep * i);
    expression.push(current);
  }
  return expression;
};

const genTask = () => {
  const startNum = random(1, 20);
  const step = random(2, 9);
  const rawQuestion = randomArithmeticProgression(startNum, step, length);
  const randomProgressElement = random(0, length - 1);
  const answer = rawQuestion[randomProgressElement].toString();
  rawQuestion.splice(randomProgressElement, 1, '..');
  const question = rawQuestion.join(' ');
  return [question, answer];
};

export default () => {
  playBrainGame(message, genTask);
};
