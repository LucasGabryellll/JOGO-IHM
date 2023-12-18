import { useState } from 'react';
import { createDeck } from '../../../controller/deck';
import { socket } from '../../../service/socketio';

import styles from './styles.module.css';

interface CardProps {
  room: string,
}

export function Card({ room }: CardProps) {
  const [deck, setDeck] = useState(createDeck());

  const drawCard = () => {
    if (deck.length > 0) {
      const drawnCard = deck.pop();
      //console.log('Carta Sorteada:', drawnCard);
      
      setDeck([...deck]);

      socket.emit('playerAnswer', {
        room: {
          id: room
        },
        card: drawnCard,
      })
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