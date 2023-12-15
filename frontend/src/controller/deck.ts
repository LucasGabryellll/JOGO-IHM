import { Card } from "../model/card";

function createDeck(): Card[] {
  const deck: Card[] = [];

  for (let i = 0; i < 10; i++) {
    deck.push({ id: `card_${i}`, type: 'moveForward', value: i+1 });
  }

  for (let i = 0; i < 5; i++) {
    deck.push({ id: `card_${i + 10}`, type: 'moveBackward', value: i+1 });
  }

  const questions = [
    'Qual é a capital do Brasil?',
    'Quem é o presidente dos EUA?',
    'Quanto é 2 + 2?',
  ];

  for (let i = 0; i < 5; i++) {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    deck.push({ id: `card_${i + 15}`, type: 'answerQuestion', question: randomQuestion });
  }

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