import readlineSync from 'readline-sync';
// import random from 'lodash/random.js';

export default function playBrainGame(msg, randomData, getAnswer) {
  let winCount = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(msg);

  do {
    const question = randomData();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const userAnswer = answer.toLowerCase();
    const isCorrect = getAnswer(question);
    if (userAnswer !== isCorrect) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${isCorrect}'.\nLet's try again, ${userName}!`
      );
      break;
    } else if (userAnswer === isCorrect) {
      console.log('Correct!');
      winCount += 1;
    }

    if (winCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  } while (winCount < 3);
}
