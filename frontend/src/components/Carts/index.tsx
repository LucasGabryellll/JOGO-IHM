import styles from './styles.module.css';

import { Card } from './Card';

interface CartsProps {
  namePlayer: string;
  isOpen: boolean;
  room: string;
}

export function Carts({ namePlayer, isOpen, room }: CartsProps) {

  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <div className={styles['description-player']}>{namePlayer}</div>
      <div className={styles.content}>
        <Card room={room} />
        <Card room={room} />
        <Card room={room} />
        <Card room={room}/>
      </div>
    </div>
  )
}