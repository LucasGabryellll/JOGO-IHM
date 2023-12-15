import { useState } from 'react';
import { createDeck } from '../../../controller/deck';

import styles from './styles.module.css';

export function Card() {
  const [deck, setDeck] = useState(createDeck());

  const drawCard = () => {
    if (deck.length > 0) {
      const drawnCard = deck.pop();
      console.log('Carta Sorteada:', drawnCard);
      
      setDeck([...deck]);
    } else {
      console.log('O baralho está vazio!');
    }
  };

  return (
    <div className={styles.card} onClick={drawCard}>
      <div className={styles['card-inner']} />
    </div>
  )
}