import { CardProps } from "../model/card";

function createDeck(): CardProps[] {
  const deck: CardProps[] = [];

  for (let i = 0; i < 50; i++) {
    //const randomNumber = Math.floor(Math.random() * 6) + 1;
    deck.push({ id: `card_move_f${i}`, type: 'moveForward', value: 5 });
  }

  for (let i = 0; i < 25; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    deck.push({ id: `card_move_b${i}`, type: 'moveBackward', value: randomNumber });
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