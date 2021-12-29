import readlineSync from 'readline-sync';

const winSuccess = 3;

export default function playBrainGame(message, getTask) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${message}`);

  for (let winCount = 0; winCount < winSuccess; winCount += 1) {
    const [question, answer] = getTask();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerLow = userAnswer.toLowerCase();
    if (userAnswerLow !== answer) {
      console.log(`'${userAnswerLow}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
