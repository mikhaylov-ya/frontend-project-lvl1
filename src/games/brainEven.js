import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

function getAnswer(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

function genTask() {
  const question = random(1, 100);
  const answer = getAnswer(question);
  return [question, answer];
}

export default function brainEven() {
  playBrainGame(message, genTask);
}
