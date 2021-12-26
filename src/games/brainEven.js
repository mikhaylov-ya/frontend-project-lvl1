import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const getAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default function brainEven() {
  const msg = 'Answer "yes" if the number is even, otherwise answer "no".';
  function task() {
    const question = random(1, 100);
    const answer = getAnswer(question);
    return [question, answer];
  }
  playBrainGame(msg, task);
}
