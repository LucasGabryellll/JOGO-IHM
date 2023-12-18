import { Card } from "../model/card";

function createDeck(): Card[] {
  const deck: Card[] = [];

  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    deck.push({ id: `card_move_f${i}`, type: 'moveForward', value: randomNumber });
  }

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    deck.push({ id: `card_move_b${i}`, type: 'moveBackward', value: randomNumber });
  }

  /*
  const questions = [
    'Qual é a capital do Brasil?',
    'Quem é o presidente dos EUA?',
    'Quanto é 2 + 2?',
  ];
  for (let i = 0; i < 5; i++) {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    deck.push({ id: `card_${i + 15}`, type: 'answerQuestion', question: randomQuestion });
  }
  */

  return shuffle(deck);
}

function shuffle(array: any[]): any[] {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export { createDeck };