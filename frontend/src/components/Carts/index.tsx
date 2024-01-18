import { Card } from './Card';

import { DescriptionPlayer, Time } from '../index';

import styles from './styles.module.css';

interface CartsProps {
  namePlayer: string;
  isOpen: boolean;
  room: string;
}

export function Carts({ namePlayer, isOpen, room }: CartsProps) {

  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <Time />

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