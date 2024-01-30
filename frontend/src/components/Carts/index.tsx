import { Card } from './Card';

import { DescriptionPlayer, Time } from '../index';

import styles from './styles.module.css';
import { useCardController } from '../../controller';

interface CartsProps {
  namePlayer: string;
  isOpen: boolean;
  room: string;
}

export function Carts({ namePlayer, isOpen, room }: CartsProps) {
  const { cardController } = useCardController();
  
  const fetch = cardController();
  
  const { passedCard } = fetch;

  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <Time 
        onTimeOver={() => passedCard(room)}
      />

      <DescriptionPlayer
        namePlayer={namePlayer}
      />

      <div className={styles.content}>
        <Card room={room} />
        <Card room={room} />
        <Card room={room} />
        <Card room={room} />
      </div>
    </div>
  )
}