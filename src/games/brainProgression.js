import random from 'lodash/random.js';
import playBrainGame from '../index.js';

export default function brainProgression() {
  const msg = 'What number is missing in the progression?';
  const randomArithProgression = () => {
    const startNum = random(1, 20);
    const step = random(2, 9);
    const count = 10;
    let member = startNum;
    const expression = [];
    for (let i = 0; i < count; i += 1) {
      expression.push(member);
      member += step;
    }
    const randomExpElem = random(0, 9);
    expression.splice(randomExpElem, 1, '..');
    return expression.join(' ');
  };
  // Мне не нравится, что вычисление ответа происходит в движке игры
  // (лишние преобразования строк и вычисление шага прогресси),
  // а не на уровне этого модуля, но ничего проще я не смог придумать
  const getAnswer = (exp) => {
    const arrExp = exp.split(' ');
    const missMembIndx = arrExp.indexOf('..');
    const progrStep = missMembIndx === 8 || missMembIndx === 9
      ? Number(arrExp[3]) - Number(arrExp[2])
      : Number(arrExp[9]) - Number(arrExp[8]);
    const answer = missMembIndx === 0
      ? Number(arrExp[missMembIndx + 1]) - progrStep
      : Number(arrExp[missMembIndx - 1]) + progrStep;
    return answer.toString();
  };
  playBrainGame(msg, randomArithProgression, getAnswer);
}
