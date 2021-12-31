import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const genTask = () => {
  const question = random(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  playBrainGame(message, genTask);
};
