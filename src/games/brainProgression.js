import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const randomArithProgression = (num, progStep, elemCount) => {
  let member = num;
  const expression = [];
  for (let i = 0; i < elemCount; i += 1) {
    expression.push(member);
    member += progStep;
  }
  return expression;
};
export default function brainProgression() {
  const msg = 'What number is missing in the progression?';
  function task() {
    const startNum = random(1, 20);
    const step = random(2, 9);
    const count = 10;
    const rawQuest = randomArithProgression(startNum, step, count);
    const randomProgElem = random(0, 9);
    const answer = rawQuest[randomProgElem].toString();
    rawQuest.splice(randomProgElem, 1, '..');
    const question = rawQuest.join(' ');
    return [question, answer];
  }
  playBrainGame(msg, task);
}
