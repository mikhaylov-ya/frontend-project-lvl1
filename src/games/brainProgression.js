import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const message = 'What number is missing in the progression?';

const length = 10;
// С НАСТУПАЮШИМ!
const randomArithmeticProgression = (first, progressionStep, progressionLength) => {
  const expression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    expression.push(first + (progressionStep * i));
  }
  return expression;
};

const hideElement = (progression, element) => {
  const newProgression = progression.slice();
  newProgression[element] = '..';
  return newProgression.join(' ');
};

const genTask = () => {
  const startNum = random(1, 20);
  const step = random(2, 9);
  const randomProgressElement = random(0, length - 1);
  const rawQuestion = randomArithmeticProgression(startNum, step, length);
  const answer = rawQuestion[randomProgressElement].toString();
  const question = hideElement(rawQuestion, randomProgressElement);
  return [question, answer];
};

export default () => {
  playBrainGame(message, genTask);
};
