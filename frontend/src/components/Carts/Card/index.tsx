import { useState } from 'react';

import { createDeck } from '../../../controller/deck';
import { socket } from '../../../service/socketio';

import { BackCard } from '../BackCard';
import { FrontCard } from '../FrontCard';

import { CardProps } from '../../../model/card';

import styles from './styles.module.css';

interface CardSelectProps {
  room: string,
}

const SECUNDS_ANIMATION = 2 * 1000;

export function Card({ room }: CardSelectProps) {
  const [deck, setDeck] = useState(createDeck());
  const [cardSelected, setCardSelectd] = useState<CardProps>();

  const drawCard = () => {
    if (deck.length > 0) {
      const drawnCard = deck.pop();
      //console.log('Carta Sorteada:', drawnCard);
      setCardSelectd(drawnCard);

      setDeck([...deck]);

      setTimeout(() => {
        setCardSelectd(undefined);

        socket.emit('playerAnswer', {
          room: {
            id: room
          },
          card: drawnCard,
        });
        
      }, SECUNDS_ANIMATION)

    } else {
      console.log('O baralho está vazio!');
    }
  };

  return (
    <div className={styles.container} onClick={drawCard}>
      <div
        className={styles['card-inner']}
        style={{ transform: `${cardSelected ? 'rotateY(180deg)' : ''}` }}
      >
        <FrontCard typeCard={cardSelected} />

        <BackCard />
      </div>
    </div>
  )
}