import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const message = 'What number is missing in the progression?';

const randomArithmeticProgression = (num, progressionStep, progressionLength) => {
  let member = num;
  const expression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    expression.push(member);
    member += progressionStep;
  }
  return expression;
};

function genTask() {
  const startNum = random(1, 20);
  const step = random(2, 9);
  const length = 10;
  const rawQuestion = randomArithmeticProgression(startNum, step, length);
  const randomProgressElement = random(0, 9);
  const answer = rawQuestion[randomProgressElement];
  rawQuestion.splice(randomProgressElement, 1, '..');
  const question = rawQuestion.join(' ');
  return [question, answer];
}

export default function brainProgression() {
  playBrainGame(message, genTask);
}
